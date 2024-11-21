import React, { useEffect, useState } from "react";

const Animate = ({ children, className = "", keyframes = {}, transition }) => {
  const [styles, setStyles] = useState({
    ...keyframes.data[0].styles,
    transition: transition || "none",
  });

  useEffect(() => {
    keyframes.data.forEach((item) => {
      if (item.start != 0) {
        setTimeout(() => {
          setStyles({ ...item.styles, transition: transition || "none" });
        }, item.start);
      }
    });
  }, [keyframes.name]);

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
};

export default Animate;
