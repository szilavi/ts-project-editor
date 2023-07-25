import React from "react";

type Project = {
  name: string;
  description: string;
};

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div
      className="container-fluid project-card-div"
      style={{ height: "65vh" }}
    >
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <div
            className="card m-2"
            style={{ width: "15rem" }}
            key={project.name}
          >
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt={project.name}
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <a href="#" className="btn btn-primary">
                More info
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
