import Image from "next/image";
import React from "react";

const benefits = [
  { src: "/quick-setup.svg", label: "Quick setup and integration" },
  { src: "/instant-ai-resolution.svg", label: "Instant AI resolution" },
  { src: "/zero-impact-on-app-speed.svg", label: "Zero impact on app speed" },
];

const Benefits = () => {
  return (
    <section className="benefits-wrapper">
      <div className="benefits-flex-container">
        {benefits.map((client, index) => (
          <div key={index} className="benefits-item">
            <Image
              src={client.src}
              alt={client.label}
              width={100}
              height={100}
              className="benefits-image"
            />
            <p className="benefits-label">{client.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
