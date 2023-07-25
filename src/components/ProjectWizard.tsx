import React, { useState, ChangeEvent } from "react";

type Project = {
  name: string;
  description: string;
  teamMembers: { name: string; position: string }[];
  links: string[];
};

interface ProjectWizardProps {
  onProjectCreate: (project: Project) => void;
}

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
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "35vh" }}
    >
      <div className="text-white col-4 mb-3">
        <label htmlFor="projectname" className="form-label">
          Project name (max 255 characters):{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="projectname"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          maxLength={255}
          required
        />
      </div>
      <div className="text-white col-4 mb-3">
        <label htmlFor="projectdescription" className="form-label">
          Project description (50-500 characters):{" "}
        </label>
        <textarea
          value={description}
          className="form-control"
          id="projectdescription"
          onChange={(e) => onDescriptionChange(e.target.value)}
          rows={3}
          minLength={50}
          maxLength={500}
        />
      </div>
    </div>
  );
};

interface SecondStepProps {
  teamMembers: { name: string; position: string }[];
  onTeamMembersChange: (
    teamMembers: { name: string; position: string }[]
  ) => void;
}

const SecondStep: React.FC<SecondStepProps> = ({
  teamMembers,
  onTeamMembersChange,
}) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleAddTeamMember = () => {
    const newTeamMember = { name, position };
    onTeamMembersChange([...teamMembers, newTeamMember]);
    setName("");
    setPosition("");
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "35vh" }}
    >
      {teamMembers.map((member, index) => (
        <div className="text-white col-4 mb-3" key={index}>
          <div>Name: {member.name}</div>
          <div>Position: {member.position}</div>
        </div>
      ))}
      <div className="text-white col-4 mb-3">
        <label htmlFor="name" className="form-label">
          Name:{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="text-white col-4 mb-3">
        <label htmlFor="position" className="form-label">
          Position:{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="position"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <button
        className="btn add-team-member text-white"
        onClick={handleAddTeamMember}
      >
        Add Team Member
      </button>
    </div>
  );
};

interface ThirdStepProps {
  links: string[];
  onLinksChange: (links: string[]) => void;
}

const ThirdStep: React.FC<ThirdStepProps> = ({ links, onLinksChange }) => {
  const [link, setLink] = useState("");

  const handleAddLink = () => {
    onLinksChange([...links, link]);
    setLink("");
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "35vh" }}
    >
      {links.map((link, index) => (
        <div className="text-white col-4 mb-3" key={index}>
          <a href={link}>{link}</a>
        </div>
      ))}
      <div className="text-white col-4 mb-3">
        <label htmlFor="link" className="form-label">
          Link:{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="link"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </div>
      <button className="btn add-link-button" onClick={handleAddLink}>
        Add Link
      </button>
    </div>
  );
};

const ProjectWizard: React.FC<ProjectWizardProps> = ({ onProjectCreate }) => {
  const [step, setStep] = useState(1);

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

  return (
    <div className="new-project-div">
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
        <div className="d-flex justify-content-center">
          <button
            className="btn next-button col-2 text-white"
            onClick={() => setStep((step) => step + 1)}
          >
            Next step
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <button className="btn finish-button col-2" onClick={handleFinish}>
            Finish
          </button>
        </div>
      )}
      <div className="text-white">Progress: {step}/3</div>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={(step / 3) * 100}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectWizard;
