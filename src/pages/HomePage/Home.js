import Footer from "../../components/footer/footer";
import "./Home.css";
import { useRef } from "react";
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

function Home() {
  const section2 = useRef(null);
  const navigateToSection2 = () => {
    section2.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div id="homePageDiv" className="homePageDiv">
        <div className="headingDiv">
          <h1 className="engHeading">Ode | </h1>
          <h1 className="hindiHeading">ओड</h1>
        </div>
        <div className="navDiv">
          <a className="hover-underline-animation" href="/Photos">
            Pictures
          </a>
          <a className="hover-underline-animation" href="/Music">
            Music
          </a>
        </div>
      </div>
      <div ref={section2} id="homePageDiv2" className="homePageDiv2">
        <div className="homeAboutContent">
          <div className="welcomeHeading">
            <h1>Welcome to Ode</h1>
          </div>
          <div className="siteDescription">
            <p>
              We all remember experiences, cherish the memories that shape us,
              as they weave the fabric of our identity. Through this curated
              collection of images and melodies, I endeavor to capture the
              essence of India – its captivating landscapes, vibrant culture,
              and soul-stirring music. Each snapshot and tune serves as a
              testament to the timeless beauty of Indian heritage, inviting you
              to immerse yourself in the rich tapestry of our nation's
              diversity. Join me on this journey to celebrate the unique Indian
              experience, where every note and every scene resonates with the
              spirit of our beloved country. This is my attempt to present an
              ode to <strong>all things Indian | भारतीय</strong>
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
