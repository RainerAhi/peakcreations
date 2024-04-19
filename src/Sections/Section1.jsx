import React, { useEffect, useState } from "react";

export const Section1 = () => {

    const [hideScrollText, setHideScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 100;
  
        if (window.scrollY > scrollThreshold) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
    <section className="section one">
      <div class="nav">
          <div class="left-content">
              <img class="smalllogo" src="/bluelogo.png" alt="logohere" />
          </div>
          <div class="center">
              <h1 className="small-text" >Peak Creations</h1>
          </div>
      </div>
      <div className="content-one" >
          <h1 className="headline" >Veniam<span className="headline-blue" > Magna</span><br/>Incididunta</h1>
          <div className="content-one-bottom" >
            <div className="bottom-one" >
              <div className="bottom-circle" >100</div>
              <h1 className="small-description grey" >Rahulolevat Klienti</h1>
            </div>
            <div className="bottom-two" >
              <p className="description" >We build engaging websites, brands <br/>& innovative e-commerce solutions.</p>
              <div className="bottom-box" >
                <h1 className="small-description white bold" >Broneeri kõne</h1>
              </div>
            </div>
          </div>
      </div>
    </section>
    )
}