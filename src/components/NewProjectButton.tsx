import React from "react";

type NewProjectButtonProps = {
  onClick: () => void;
  onDiscardChanges: () => void;
  creatingProject: boolean;
};

const NewProjectButton: React.FC<NewProjectButtonProps> = ({
  onClick,
  onDiscardChanges,
  creatingProject,
}) => {
  const handleClick = () => {
    if (creatingProject) {
      onDiscardChanges();
    } else {
      onClick();
    }
  };

  const buttonText = creatingProject ? "Discard Changes" : "Add New Project";

  return (
    <button className="btn newproject-button text-white" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default NewProjectButton;
