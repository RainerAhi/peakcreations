import Lenis from "@studio-freight/lenis";

import { Section2 } from "./Sections/Section2";
import { Section1 } from "./Sections/Section1";
import { Section3 } from "./Sections/Section3";
import Animations from "./Animations";
import { Section4 } from "./Sections/Section4";
import { useEffect, useRef, useState } from "react";
import { Section6 } from "./Sections/Section6";
import { Section5 } from "./Sections/Section5";
import { Section7 } from "./Sections/Section7";

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
  const section6Ref = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

    return (
      <>
        <Animations />

        
        <div class="navigation">
          <div className="navigation-left" >
            <img class="logo" src="/peak.png" />
          </div>
          <div class="navigation-right">
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section2Ref)} >Projektid</h1>
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section3Ref)} >Arvustused</h1>
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section4Ref)} >Meist</h1>
            <h1 className="small-text navigation-text" onClick={() => scrollToSection(section6Ref)} >Hinnakiri</h1>
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
        <Section5 />
        <div ref={section6Ref}>
          <Section6 />
        </div>
        <Section7 />
            
      </>
    )
}

export default App;