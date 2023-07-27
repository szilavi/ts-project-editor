import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import NewProjectButton from "./components/NewProjectButton";
import ProjectWizard from "./components/ProjectWizard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

interface Project {
  id: string;
  name: string;
  description: string;
  teamMembers: { name: string; position: string }[];
  links: string[];
}

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
    <Router>
      <Routes>
        <Route
          path="/projects/:id"
          element={<ProjectDetails projects={projects} />}
        />
        <Route
          path="/"
          element={
            <>
              <NewProjectButton
                onClick={handleNewProjectClick}
                onDiscardChanges={handleDiscardChanges}
                creatingProject={creatingProject}
              />
              {content}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
