import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Photo.css";
// import * as fs from "fs";

const slides = [
  { add: "./images/indiaGate.jpg", desc: "The India Gate, Delhi" },
  { add: "./images/fortDoor.jpg", desc: "Mandu, Madhya Pradesh" },
  {
    add: "./images/paintedStork.jpg",
    desc: "Painted Storks at Ranganathittu Sanctuary, Karnataka",
  },
  {
    add: "./images/templeTopSrirang.jpg",
    desc: "Srirangapatana, Karnataka",
  },
  {
    add: "./images/monasteryCoorg.jpg",
    desc: "Golden Temple, Coorg, Karnataka",
  },
  { add: "./images/coorg.jpg", desc: "Coorg, Karnataka" },
  {
    add: "./images/manduValley.jpg",
    desc: "A valley in Mandu, Madhya Pradesh",
  },
  {
    add: "./images/narmada.jpg",
    desc: "The Narmada, somewhere in Madhya Pradesh",
  },
  {
    add: "./images/srirangapatnamTemple.jpg",
    desc: "Srirangapatana, Karnataka",
  },
  { add: "./images/ootyTeaGarden.jpg", desc: "Ooty, Tamil Nadu" },
];
// fs.readdirSync("./images").forEach((file) => {
//   slides.push(`../../pages/PhotoPage/images/${file}`);
// });
function Photo() {
  return (
    <div className="photoPageDiv">
      <div className="title">
        <a href="/">
          <h3>Ode | ओड</h3>
        </a>
        <h3>A journey in pictures</h3>
      </div>
      <div className="sliderContent">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Photo;
