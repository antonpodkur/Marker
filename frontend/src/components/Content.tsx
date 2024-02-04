import { Routes, Route, useLocation } from "react-router-dom";
import CreateBook from "../pages/CreateBook";
import Welcome from "../pages/Welcome";
import { useEffect, useState } from "react";
import React from "react";
import Home from "../pages/Home";
import { useStore } from "../store/store";
import BookList from "../pages/BookList";
import EditBook from "../pages/EditBook";
import Settings from "../pages/Setttings";

const Content: React.FC = () => {
  const location = useLocation();
  const firstLauch = useStore(store => store.firstLaunch);

  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    console.log(firstLauch)
    if (location != displayLocation) setTransitionStage("fadeOut")
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
        <Route path='/' element={firstLauch ? <Welcome /> : <Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/book/create' element={<CreateBook />} />
        <Route path='/book/edit/:id' element={<EditBook />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/settingswelcome' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default Content
