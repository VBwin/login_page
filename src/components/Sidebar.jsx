import React from "react";

const Sidebar = () => {
  return (
    <div className="left-panel">
      <div className="brand">
        <span className="logo">⌘</span> Acme Inc
      </div>
      <blockquote className="quote">
        <p>
          “This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.”
        </p>
        <cite>Sofia Davis</cite>
      </blockquote>
    </div>
  );
};

export default Sidebar;
