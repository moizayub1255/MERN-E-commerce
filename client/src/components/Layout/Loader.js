import React, { useEffect, useState } from "react";
import "../../styles/Loader.css"; // Loader ke liye CSS file

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // 3 seconds ke baad loader hide ho jayega
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Loader;