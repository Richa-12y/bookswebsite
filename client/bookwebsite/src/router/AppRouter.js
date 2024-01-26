import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import GetStarted from "../pages/GetStarted";
import FullCard from "../pages/FullCard";
import EditCard from "../pages/EditCard";
import CreateCard from "../pages/CreateCard";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/card/:id" element={<FullCard />} />
        <Route path="/card/:id/edit" element={<EditCard />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
