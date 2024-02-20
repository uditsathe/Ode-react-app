import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Home from "./pages/HomePage/home";
import Photo from "./pages/PhotoPage/Photo";
import Music from "./pages/MusicPage/Music";
import "./App.css";

function App() {
  const ref = useRef(null);
  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options}>
      <main data-scroll-container ref={ref}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/photos" exact element={<Photo />} />
              <Route path="/music" exact element={<Music />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
