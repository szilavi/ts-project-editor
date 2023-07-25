import React, { useState } from "react";
import ProjectWizard from "./ProjectWizard";

// Definíció az új Project típusnak
type Project = {
  name: string;
  description: string;
};

type NewProjectButtonProps = {
  onClick: () => void;
  onProjectCreate: (project: Project) => void;
};

const NewProjectButton: React.FC<NewProjectButtonProps> = ({
  onClick,
  onProjectCreate,
}) => {
  const [creating, setCreating] = useState(false);

  const handleClick = () => {
    setCreating(true);
    onClick();
  };

  const handleProjectCreate = (project: Project) => {
    setCreating(false);
    onProjectCreate(project);
  };

  if (creating) {
    return <ProjectWizard onProjectCreate={handleProjectCreate} />;
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center new-project-div"
      style={{ height: "35vh" }}
    >
      <button
        className="btn newproject-button text-white"
        onClick={handleClick}
      >
        Add new project
      </button>
    </div>
  );
};

export default NewProjectButton;
