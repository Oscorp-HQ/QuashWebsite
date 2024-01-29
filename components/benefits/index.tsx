import React from "react";

const benefits = [
  { src: "/quick-setup.svg", label: "Quick setup and integration" },
  { src: "/instant-ai-resolution.svg", label: "Instant AI resolution" },
  { src: "/zero-impact-on-app-speed.svg", label: "Zero impact on app speed" },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-wrapper">
        <div className="benefits-content">
          <div className="benefits-flex-container">
            {benefits.map((client, index) => (
              <div key={index} className="benefits-item">
                <img src={client.src} alt={client.label}  className="benefits-image"/>
                <p className="benefits-label">{client.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
