import React from "react";

export const Section1 = () => {

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };

    return (
      <section className="one">

        <div className="one-content" >
          <h1 className="headline" >Muudame<span className="headline-blue" > Brändi</span><br/>Nähtavaks</h1>
          <div className="one-bottom" >
            <div className="one-bottom-row" >
              <div className="one-bottom-row-circle" >10</div>
              <h1 className="small-description grey" >Edukat Projekti</h1>
            </div>
            <div className="one-bottom-row-right" >
              <p className="description" >Pakume tipptasemel lühivideote<br/>& modernsete veebilehtede lahendusi.</p>
              <div className="broneeri-kõne" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')} >
                <h1 className="small-description white bold" >Broneeri kõne</h1>
              </div>
            </div>
          </div>

        </div>
        
    </section>
    )
}