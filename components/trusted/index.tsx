import React from "react";

const trustedClients = [
  { src: "/rigi.svg", label: "rigi" },
  { src: "/rocket-pay.svg", label: "rocket-pay" },
  { src: "/market-pulse.svg", label: "market-pulse" },
  { src: "/rebel-foods.svg", label: "rebel-foods" },
  { src: "/ola-money.svg", label: "ola-money" },
];

const Trusted = () => {
  return (
 

    <div className="trusted-container">
      <div className="trusted-items">
        <p className="trusted-text"> Trusted by Developers at</p>
        <div className="trusted-images-container">
          {trustedClients.map((client, index) => (
            <div className="trusted-images">
              <img
                key={index}
                src={client.src}
                alt={client.label}
                className="trusted-image"
              />
              <img
                key={index}
                src={`/${client.label}-mob.svg`}
                alt={client.label}
                className="trusted-image-mob"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
