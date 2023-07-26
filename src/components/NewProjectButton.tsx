import React from "react";
import styles from "./NewProjectButton.module.css";

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
    <button
      className={`btn text-white ${styles.btn} ${styles["newproject-button"]}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default NewProjectButton;
