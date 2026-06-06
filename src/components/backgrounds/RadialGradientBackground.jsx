import React from "react";

function RadialGradientBackground({ variant = 'hero', gradients = [] }) {

  const variants = {
    hero: [{
      position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
      size: 'w-[1400px] h-[1400px]',
      colors: [
        { color: "rgba(59,130,246,0)", stop: "0%" },
        { color: "rgba(59,130,246,0.08)", stop: "20%" },
        { color: "rgba(59,130,246,0.18)", stop: "40%" },
        { color: "rgba(59,130,246,0.08)", stop: "70%" },
        { color: "rgba(59,130,246,0)", stop: "100%" }
      ]
      , blur: '0px',
      opacity: 0.9,
    },
    {
      position: 'top-1 left-1',
      size: 'w-[1400px] h-[1400px]',
      colors: [
        { color: "rgba(59,130,246,0)", stop: "0%" },
        { color: "rgba(59,130,246,0.08)", stop: "20%" },
        { color: "rgba(59,130,246,0.18)", stop: "40%" },
        { color: "rgba(59,130,246,0.08)", stop: "70%" },
        { color: "rgba(59,130,246,0)", stop: "100%" }
      ]
      , blur: '0px',
      opacity: 0.9,
    },
    {
      position: 'bottom-1 right-1',
      size: 'w-[1400px] h-[1400px]',
      colors: [
        { color: "rgba(59,130,246,0)", stop: "0%" },
        { color: "rgba(59,130,246,0.08)", stop: "20%" },
        { color: "rgba(59,130,246,0.18)", stop: "40%" },
        { color: "rgba(59,130,246,0.08)", stop: "70%" },
        { color: "rgba(59,130,246,0)", stop: "100%" }
      ]
      , blur: '0px',
      opacity: 0.9,
    }
    ],
    about: [
      {
        position: 'bottom-1 left-[75%]',
        size: 'w-[700px] h-[700px]',
        colors: [
          { color: "rgba(59,130,246,0)", stop: "0%" },
          { color: "rgba(59,130,246,0.08)", stop: "20%" },
          { color: "rgba(59,130,246,0.18)", stop: "40%" },
          { color: "rgba(59,130,246,0.08)", stop: "70%" },
          { color: "rgba(59,130,246,0)", stop: "100%" }
        ]
        , blur: '0px',
        opacity: 0.9,
      }
    ]
  }
  const activeGradients = variant === 'custom' ? gradients : variants[variant] || variants.hero

  const generateGradient = (colors) => {
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(", ")
    return `radial-gradient(circle at center,${colorStops},transparent 60%,transparent 100%)`;
  }

  return <div
    className="absolute inset-0 overflow-hidden pointer-events-none">
    {activeGradients.map((gradient, index) => (
      < div key={index} className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
        style={{
          background: generateGradient(gradient.colors),
          filter: `blur(${gradient.blur})`,
          opacity: gradient.opacity
        }} />
    ))
    }
  </div >;
}

export default RadialGradientBackground;
