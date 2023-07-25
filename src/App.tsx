import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import NewProjectButton from "./components/NewProjectButton";
import SearchBar from "./components/SearchBar";
import "./App.css";

type Project = {
  name: string;
  description: string;
};

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchText, setSearchText] = useState("");
  const [creatingProject, setCreatingProject] = useState(false);

  const handleNewProjectClick = () => {
    setCreatingProject(true);
  };

  const handleProjectCreate = (project: Project) => {
    setProjects([...projects, project]);
    setCreatingProject(false);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <NewProjectButton
        onClick={handleNewProjectClick}
        onProjectCreate={handleProjectCreate}
      />
      <SearchBar value={searchText} onChange={setSearchText} />
      <ProjectCard projects={projects} />
    </div>
  );
};

export default App;
