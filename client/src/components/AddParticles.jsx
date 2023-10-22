import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useContext } from "react";
import { AppContext } from "../App";

const AddParticles = () => {
  const { theme } = useContext(AppContext);
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  const options = {
    background: {
      color: {},
    },
    fpsLimit: 90,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 125,
          duration: 1,
        },
      },
    },
    particles: {
      color: {
        value: theme === "luxury" ? "#fff" : "#000",
      },
      links: {
        color: theme === "luxury" ? "#fff" : "#000",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 600,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0, max: 2.5 },
      },
    },
    detectRetina: true,
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </>
  );
};

export default AddParticles;
