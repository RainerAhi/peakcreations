import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";

import { Section2 } from "./Sections/Section2";
import { Section1 } from "./Sections/Section1";
import { Section3 } from "./Sections/Section3";
import Animations from "./Animations";
import { Section4 } from "./Sections/Section4";
import { useRef } from "react";
import { Section5 } from "./Sections/Section5";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">PEAK CREATIONS</h1>
      </div>
    </div>
  );
};

function App() {

  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical", 
    smooth: true,
    mouseMultiplier: 0.5, 
    smoothTouch: false, 
    touchMultiplier: 2, 
    infinite: false 
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  
  requestAnimationFrame(raf);

  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

    return (
      <>
        <LoadingScreen />
        <Animations />

        
        <div class="navigation">
          <div className="navigation-left" >
            <img class="logo" src="/peak.png" />
          </div>
          <div class="navigation-right">
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section2Ref)} >Projektid</h1>
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section3Ref)} >Arvustused</h1>
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section4Ref)} >Meist</h1>
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section5Ref)} >Hinnakiri</h1>
          </div>
        </div>

        <Section1 />
        <div ref={section2Ref}>
          <Section2 />
        </div>
        <div ref={section3Ref}>
          <Section3 />
        </div>
        <div ref={section4Ref}>
          <Section4 />
        </div>
        <div ref={section5Ref}>
          <Section5 />
        </div>
            
      </>
    )
}

export default App;