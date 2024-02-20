import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import YouTube from "react-youtube";
import MusicSlider from "../../components/MusicSlider/MusicSlider";
import ReactPlayer from "react-player/youtube";
import "./Music.css";

const slides = [
  "Mshi-7hfKJM",
  "b4axavWSFoo",
  "i1oivnBSBJc",
  "CiMSk_2-QbA",
  "55TwzTULzzQ",
  "MrqTa5njMP0",
  "5OwOoQzLOyc",
];

function Music() {
  return (
    <div className="musicPageDiv">
      <div className="title">
        <a href="/">
          <h3>Ode | ओड</h3>
        </a>
        <h3>To distinctly Indian sounds</h3>
      </div>
      <div className="sliderContent">
        <MusicSlider slides={slides} />
      </div>
    </div>
  );
}
export default Music;
