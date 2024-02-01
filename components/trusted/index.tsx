import Image from "next/image";
import React from "react";

const trustedClients = [
  { src: "/rigi.svg", label: "rigi", width: 133, height: 36, mobwidth: 94, mobheight:26},
  { src: "/rocket-pay.svg", label: "rocket-pay", width: 201, height: 46,mobwidth: 154, mobheight: 36},
  { src: "/market-pulse.svg", label: "market-pulse", width: 141, height: 52,mobwidth: 111, mobheight: 41},
  { src: "/rebel-foods.svg", label: "rebel-foods", width: 130, height:44 ,mobwidth: 97, mobheight:33 },
  { src: "/ola-money.svg", label: "ola-money", width: 237, height: 35,mobwidth: 161, mobheight: 24},
];

const Trusted = () => {
  return (
    <div className="trusted-container">
      <div className="trusted-items">
        <p className="trusted-text"> Trusted by Developers at</p>
        <div className="trusted-images-container">
          {trustedClients.map((client) => (
            <div className="trusted-images" key={client.label}>
              <Image
                src={client.src}
                alt={client.label}
                className="trusted-image"
                width={client.width}
                height={client.height}
              />
              <Image
                src={`/${client.label}-mob.svg`}
                alt={client.label}
                className="trusted-image-mob"
                width={client.mobwidth}
                height={client.mobheight}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
