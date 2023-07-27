import React, { useState, useEffect } from "react";
import styles from "./ProjectList.module.css";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
  teamMembers: { name: string; position: string }[];
  links: string[];
}

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [searchText, setSearchText] = useState("");
  const [loadedProjects, setLoadedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadedProjects(projects);
      setIsLoading(false);
    }, 1000);
  }, [projects]);

  const filteredProjects = loadedProjects.filter((project) =>
    project.name.includes(searchText)
  );

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className={`col-md-3 ${styles.searchinput}`}>
        <SearchBar value={searchText} onChange={setSearchText} />
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <h1 className="text-white text-center">
            You don't have any projects yet, create one!
          </h1>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {filteredProjects.map((project, index) => (
            <div className="m-2" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
