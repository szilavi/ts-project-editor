import React from "react";

type Project = {
  name: string;
  description: string;
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="card col-xxl-3 col-xl-4 col-lg-6"
      style={{ width: "15rem" }}
    >
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt={project.name}
      />
      <div className="card-body d-flex flex-column ">
        <h5
          className="card-title overflow-hidden card-ellipsis-title"
          style={{ height: "3rem" }}
        >
          {project.name}
        </h5>
        <p
          className="card-text overflow-hidden card-ellipsis-body"
          style={{ height: "8rem" }}
        >
          {project.description}
        </p>
        <a href="#" className="btn btn-info text-white mt-auto">
          More info
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
