import React, { useState } from "react";
import styles from "./ThirdStep.module.css";

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

  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%@_.~+&:]*)*" + // path
      "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i" // fragment locator
  );

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "87vh" }}
    >
      <div
        className={`card ${styles.inputfield} text-white col-12 col-md-8 col-lg-6 mb-3 p-3`}
      >
        <div className={`mb-3 ${styles.linkContainer}`}>
          {links.map((link, index) => (
            <div key={index}>
              <a href={link} className="text-white">
                {link}
              </a>
            </div>
          ))}
        </div>
        <div className="mb-3">
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
        <div className="d-flex justify-content-center">
          <button
            className={`btn ${styles["add-link-button"]} text-white col-12 col-md-6`}
            onClick={handleAddLink}
            disabled={!urlPattern.test(link)}
          >
            Add Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
