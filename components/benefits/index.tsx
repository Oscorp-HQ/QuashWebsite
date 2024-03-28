import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const benefits = [
  { src: "/quick-setup.svg", label: "Quick setup and integration" },
  { src: "/instant-ai-resolution.svg", label: "Instant AI resolution" },
  { src: "/zero-impact-on-app-speed.svg", label: "Zero impact on app speed" },
];

const Benefits = () => {
  return (
    <section className="benefits-wrapper">
      <div
        className="benefits-flex-container"
      >
        {benefits.map((client, index) => (
          <motion.div
          initial={{ opacity: 0.0, x: index === 0 ? -40 : 0 ||  index === 2 ? 40 : 0  }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }} key={index} className="benefits-item">
            <Image
              src={client.src}
              alt={client.label}
              width={100}
              height={100}
              className="benefits-image"
            />
            <p className="benefits-label">{client.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
