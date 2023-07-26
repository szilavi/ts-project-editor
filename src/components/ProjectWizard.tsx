import React, { useState, useEffect } from "react";
import styles from "./ProjectWizard.module.css";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

type Project = {
  name: string;
  description: string;
  teamMembers: { name: string; position: string }[];
  links: string[];
};

interface ProjectWizardProps {
  onProjectCreate: (project: Project) => void;
}

const ProjectWizard: React.FC<ProjectWizardProps> = ({ onProjectCreate }) => {
  const [step, setStep] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamMembers, setTeamMembers] = useState<
    { name: string; position: string }[]
  >([]);
  const [links, setLinks] = useState<string[]>([]);

  const handleFinish = () => {
    const newProject = { name, description, teamMembers, links };
    onProjectCreate(newProject);
  };

  const handleNextClick = () => {
    if (!isValid) {
      return;
    }
    setStep((step) => step + 1);
  };

  useEffect(() => {
    if (step === 1) {
      setIsValid(
        name !== "" &&
          name.length <= 255 &&
          (description === "" ||
            (description.length >= 50 && description.length <= 500))
      );
    }
    // További validációs logika a második és harmadik lépéshez...
  }, [step, name, description]);

  return (
    <div>
      {step === 1 && (
        <FirstStep
          name={name}
          description={description}
          onNameChange={setName}
          onDescriptionChange={setDescription}
        />
      )}
      {step === 2 && (
        <SecondStep
          teamMembers={teamMembers}
          onTeamMembersChange={setTeamMembers}
        />
      )}
      {step === 3 && <ThirdStep links={links} onLinksChange={setLinks} />}
      {step < 3 ? (
        <div
          className="d-flex justify-content-center mb-2 pt-1"
          style={{ height: "5vh" }}
        >
          <button
            className={`btn ${
              styles["next-button"]
            } col-8 col-md-3 col-lg-2 text-white ${isValid ? "" : "disabled"}`}
            onClick={handleNextClick}
          >
            Next step
          </button>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center mb-1"
          style={{ height: "5vh" }}
        >
          <button
            className={`btn ${styles["finish-button"]} col-8 col-md-3 col-lg-2 text-white`}
            onClick={handleFinish}
          >
            Finish
          </button>
        </div>
      )}
      <div className="text-white text-center" style={{ height: "5vh" }}>
        Progress: {step}/3
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={(step / 3) * 100}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ height: "2vh" }}
      >
        <div
          className={`progress-bar ${styles.progressbar}`}
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectWizard;
