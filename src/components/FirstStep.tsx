import React from "react";
import styles from "./FirstStep.module.css";

interface FirstStepProps {
  name: string;
  description: string;
  onNameChange: (name: string) => void;
  onDescriptionChange: (description: string) => void;
}

const FirstStep: React.FC<FirstStepProps> = ({
  name,
  description,
  onNameChange,
  onDescriptionChange,
}) => {
  const isValidName =
    name.length > 0 &&
    name.length <= 255 &&
    name.charCodeAt(0) >= 65 &&
    name.charCodeAt(0) <= 90;

  const isValidDescription =
    description.length === 0 ||
    (description.length >= 50 && description.length <= 500);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "87vh" }}
    >
      <div
        className={`card ${styles.inputfield} text-white col-12 col-md-8 col-lg-4 mb-3 p-3`}
      >
        <div className="mb-3">
          <label htmlFor="projectname" className="form-label">
            Project name (max 255 characters):{" "}
          </label>
          <input
            type="text"
            className={`form-control ${
              isValidName ? "is-valid" : "is-invalid"
            }`}
            id="projectname"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            maxLength={255}
            placeholder="Starts with a capital letter!"
            required
          />
          <div className={isValidName ? "text-success" : "text-danger"}>
            {name.length} / 255
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="projectdescription" className="form-label">
            Project description (50-500 characters):{" "}
          </label>
          <textarea
            value={description}
            className={`form-control ${
              isValidDescription ? "is-valid" : "is-invalid"
            }`}
            id="projectdescription"
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Optional."
            rows={3}
            minLength={50}
            maxLength={500}
          />
          <div className={isValidDescription ? "text-success" : "text-danger"}>
            {description.length} / 500
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
