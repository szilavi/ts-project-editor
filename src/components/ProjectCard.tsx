import React from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  name: string;
  description: string;
  teamMembers: { name: string; position: string }[];
  links: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className={`card text-white col-xxl-3 col-xl-4 col-lg-6 ${styles.bgcard}`}
      style={{ width: "15rem" }}
    >
      <img
        src="https://fakeimg.pl/600x400"
        className="card-img-top"
        alt={project.name}
      />
      <div className="card-body d-flex flex-column ">
        <h5
          className={`fw-medium card-title overflow-hidden ${styles["card-ellipsis-title"]}`}
          style={{ height: "3rem" }}
        >
          {project.name}
        </h5>
        <p
          className={`fw-lighter card-text overflow-hidden ${styles["card-ellipsis-body"]}`}
          style={{ height: "8rem" }}
        >
          {project.description}
        </p>
        <Link
          className={`${styles.moreinfo} text-white text-decoration-none btn btn-info bg-dark text-white mt-auto`}
          to={`/projects/${project.id}`}
        >
          More info
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
