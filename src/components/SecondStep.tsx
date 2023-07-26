import React, { useState } from "react";
import styles from "./SecondStep.module.css";

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

  const maxMembers = 12;

  const handleAddTeamMember = () => {
    if (teamMembers.length < maxMembers) {
      const newTeamMember = { name, position };
      onTeamMembersChange([...teamMembers, newTeamMember]);
      setName("");
      setPosition("");
    }
  };

  const handleRemoveTeamMember = (index: number) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers.splice(index, 1);
    onTeamMembersChange(newTeamMembers);
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "87vh" }}
    >
      <div
        className={`card ${styles.inputfield} text-white col-12 col-md-8 col-lg-6 mb-3 p-3`}
      >
        <div
          className={`d-flex flex-wrap text-center justify-content-center ${styles.teamMembersContainer}`}
        >
          {teamMembers.map((member, index) => (
            <div className={`card ${styles.teamMemberCard} m-2`} key={index}>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => handleRemoveTeamMember(index)}
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name (required)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            placeholder="Position (required)"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className={`btn ${styles["add-team-member"]} text-white col-12 col-md-6`}
            onClick={handleAddTeamMember}
            disabled={teamMembers.length >= maxMembers || !name || !position}
          >
            {`Add Team Member (${maxMembers - teamMembers.length} left)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
