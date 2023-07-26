import React, { useState } from "react";
import ProjectList from "./components/ProjectList"; // Importáljuk a ProjectList komponenst
import NewProjectButton from "./components/NewProjectButton";
import ProjectWizard from "./components/ProjectWizard";
import "./App.css";

type Project = {
  name: string;
  description: string;
};

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [creatingProject, setCreatingProject] = useState(false);

  const handleNewProjectClick = () => {
    setCreatingProject(true);
  };

  const handleProjectCreate = (project: Project) => {
    setProjects([...projects, project]);
    setCreatingProject(false);
  };

  const handleDiscardChanges = () => {
    setCreatingProject(false);
  };

  let content;
  if (creatingProject) {
    content = <ProjectWizard onProjectCreate={handleProjectCreate} />;
  } else {
    content = <ProjectList projects={projects} />;
  }

  return (
    <div>
      <NewProjectButton
        onClick={handleNewProjectClick}
        onDiscardChanges={handleDiscardChanges}
        creatingProject={creatingProject}
      />
      {content}
    </div>
  );
};

export default App;
