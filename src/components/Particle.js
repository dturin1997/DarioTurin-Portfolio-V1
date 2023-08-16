import React from "react";
import Particles from "react-tsparticles";
import image from "../Assets/binary-code.png";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 3000,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: true,
            straight: true,
            direction: "bottom",
            speed: 2,
          },
          size: {
            value: 15,
          },
          opacity: {
            value: 0.45,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.01,
            },
          },
          shape: {
            type: "image",
            image: {
              src: image,
              width: 500,
              height: 500,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
