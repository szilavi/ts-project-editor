import React from "react";
import styles from "./ProjectCard.module.css";

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
        src="https://fakeimg.pl/600x400"
        className="card-img-top"
        alt={project.name}
      />
      <div className="card-body d-flex flex-column ">
        <h5
          className={`card-title overflow-hidden ${styles["card-ellipsis-title"]}`}
          style={{ height: "3rem" }}
        >
          {project.name}
        </h5>
        <p
          className={`card-text overflow-hidden ${styles["card-ellipsis-body"]}`}
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
