import { useState, useRef, useEffect } from "react";
import "./ImageSlider.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pic, setPic] = useState(require("./images/fortDoor.jpg"));
  const [scrollDir, setScrollDir] = useState(1);
  const card = useRef();

  useGSAP(() => {
    if (scrollDir === 1) {
      gsap.fromTo(
        ".card",
        { opacity: 0, y: -400 },
        { opacity: 1, x: 0, y: 0, duration: 1.6 }
      );
    } else {
      gsap.fromTo(
        ".card",
        { opacity: 0, y: 400 },
        { opacity: 1, x: 0, y: 0, duration: 1.6 }
      );
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setScrollDir(0);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setScrollDir(1);
    setCurrentIndex(newIndex);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 37) {
      goToPrevious();
    } else if (e.keyCode === 39) {
      goToNext();
    }
  };

  return (
    <div className="slide">
      <div className="arrow leftArrow" onClick={goToPrevious}>
        ❰
      </div>
      <div
        className="imageSlideDiv"
        onKeyDown={(e) => {
          handleKeyPress(e);
        }}
      >
        <div className="photoFullContentDiv">
          <div className="card">
            <img src={require(`${slides[currentIndex].add}`)} alt="pic" />
          </div>
          <h6>{slides[currentIndex].desc}</h6>
        </div>
      </div>
      <div className="arrow rightArrow" onClick={goToNext}>
        ❱
      </div>
    </div>
  );
}
export default ImageSlider;
