import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetails.module.css";

interface TeamMember {
  name: string;
  position: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  teamMembers: TeamMember[];
  links: string[];
}

interface ProjectDetailsProps {
  projects: Project[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projects }) => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <h1 className="text-white text-center">No project found with id: {id}</h1>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`card text-white ${styles.projectcard}`}>
        <div className="card-header fw-bolder">{project.name}</div>
        <div className={`card-body ${styles.cardbody}`}>
          <p className="fw-semibold text-decoration-underline">Description</p>
          <p className="card-description fw-lighter">{project.description}</p>
          <p className="fw-semibold text-decoration-underline">Team Members</p>
          <ul>
            {project.teamMembers.map((member, index) => (
              <li className="list-group-item" key={index}>
                {member.name} - {member.position}
              </li>
            ))}
          </ul>
          <p className="fw-semibold text-decoration-underline">Links</p>
          {project.links.map((link, index) => (
            <ul>
              <li className="list-group-item">
                <a
                  className={`${styles.linktext} text-decoration-none`}
                  href={link}
                  key={index}
                  target="blank"
                >
                  {link}
                </a>
              </li>
            </ul>
          ))}

          <div className="d-flex justify-content-end mt-5">
            <button
              className={`mt-auto btn ${styles.buttonback} text-white`}
              onClick={() => navigate("/")}
            >
              Back to the project list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
