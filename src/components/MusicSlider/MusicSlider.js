import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import YouTube from "react-youtube";
import "./MusicSlider.css";

function MusicSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDir, setScrollDir] = useState(1);
  const card = useRef();

  useGSAP(() => {
    if (scrollDir === 1) {
      gsap.fromTo(
        ".card",
        { opacity: 0, x: 1000, y: -100 },
        { opacity: 1, x: 0, y: 0, duration: 1.6 }
      );
    } else {
      gsap.fromTo(
        ".card",
        { opacity: 0, x: -1000, y: -100 },
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

  const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };
  return (
    <div className="slide">
      <div className="arrow leftArrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="musicSlideDiv">
        <div className="card">
          <YouTube
            className="youTubePlayer"
            videoId={`${slides[currentIndex]}`}
            options={options}
            id="video"
          />
        </div>
      </div>
      <div className="arrow rightArrow" onClick={goToNext}>
        ❱
      </div>
    </div>
  );
}
export default MusicSlider;
