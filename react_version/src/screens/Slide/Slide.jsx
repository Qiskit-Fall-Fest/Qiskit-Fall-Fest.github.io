import React from "react";
import "./style.css";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper">Quiskit Fall Fest</div>
          <div className="rectangle-4" />
          <div className="text-wrapper-2">Find out more</div>
        </div>
        <div className="overlap">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="text-wrapper-3">Speakers</div>
          <div className="ellipse-5" />
        </div>
        <div className="overlap-2">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="text-wrapper-4">Organisers</div>
        </div>
        <div className="text-wrapper-5">Agenda</div>
        <div className="text-wrapper-6">About</div>
      </div>
    </div>
  );
};
