import React from "react";

const Accordion = ({ title, children, header }) => {
  return (
    <div
      className="accordion-item"
      style={{ background: "rgba(53, 124, 179, 0.2)" }}
    >
      <h2 className="accordion-header text-center" id={`heading${header}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${header}`}
          aria-expanded="false"
          aria-controls={`collapse${header}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${header}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${header}`}
        data-bs-parent="#accordionHooks"
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
