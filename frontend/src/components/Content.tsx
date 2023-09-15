import { Routes, Route, useLocation } from "react-router-dom";
import CreateBook from "../pages/CreateBook";
import Welcome from "../pages/Welcome";
import { useEffect, useState } from "react";
import React from "react";

const Content: React.FC = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location != displayLocation) setTransitionStage ("fadeOut");
  }, [location, displayLocation]);
  return (
    <div
      className={`${transitionStage} w-full`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
      >

      <Routes location={displayLocation}>
          <Route path='/' Component={Welcome} />
          <Route path='book/create' Component={CreateBook} />
      </Routes>
    </div>
  );
}

export default Content