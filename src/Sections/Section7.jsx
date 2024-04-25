import React, { useRef, useState } from "react";
import Accordion from "../Accordion";

export const Section7 = () => {

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };
  
  return (
    <section className="seven">
      <div className="seven-spacing" />
      <div className="seven-content" >
        <h1 className="medium-headline" >Tekkis küsimusi?</h1>
        <div className="seven-row" >

          <div className="seven-row-left" >
            <Accordion
              title="Kas te garanteerite tulemusi?"
              content="Me ei garanteeri tulemusi, kuid oleme aastatega edukalt täitnud klientide eesmärke. Sisu, mide teeme, on tõestanud end toimivat. Kui tunned, et oled jäänud kasvuga hätta või ei tea, mida teha, siis meie tiim aitab."
            />
            <Accordion
              title="Kas pakkumisi on võimalik kohandada?"
              content="Jah. Näiteks kui soovite filmida lühivideosid ise siis saame alati vähendada paketi hinda ja eemaldada meiepoolse võttepäeva või kui teil on filmitud materjal olemas siis saame pakkuda ainult monteerimist. Meie miinimum koostöö maht algab 1500€/kuu."
            />
            <Accordion
              title="Kui palju aega pean mina sellesse investeerima?"
              content="Kõik sõltub sinu valitud paketist ja nägudest, keda saame kasutada videotes. Võime võtta kogu protsessi enda kätesse ja kõik, mille eest sina pead muretsema, on meie usaldamine ja ideede/videote kinnitamine."
            />
            <Accordion
              title="Kas neid videoid saab mujale ka postitada?"
              content="Jah. Videosid võib kasutada nii Facebookis, Instagramis kui ka Youtubes. Peaasi, et platvorm, kuhu plaanid postitada, toetab vertikaalseid lühivideosid."
            />
            <Accordion
              title="Kui minu ettevõte toimetab Euroopas? Tulete kohale?"
              content="Jah. Videosid võib kasutada nii Facebookis, Instagramis kui ka Youtubes. Peaasi, et platvorm, kuhu plaanid postitada, toetab vertikaalseid lühivideosid."
            />
            <Accordion
              title="Kes te olete?"
              content="Jah. Videosid võib kasutada nii Facebookis, Instagramis kui ka Youtubes. Peaasi, et platvorm, kuhu plaanid postitada, toetab vertikaalseid lühivideosid."
            />
            <Accordion
              title="Kas pakute ka tasuta näidistöid?"
              content="Jah. Videosid võib kasutada nii Facebookis, Instagramis kui ka Youtubes. Peaasi, et platvorm, kuhu plaanid postitada, toetab vertikaalseid lühivideosid."
            />
            <Accordion
              title="Mis siis, kui ma ei ole rahul?"
              content="Jah. Videosid võib kasutada nii Facebookis, Instagramis kui ka Youtubes. Peaasi, et platvorm, kuhu plaanid postitada, toetab vertikaalseid lühivideosid."
            />
          </div>

          <div className="seven-row-right" >
            <div className="seven-socials" >
              <h1 className="description white" >Follow us</h1>
              <div className="seven-socials-icons" >
                <i class="fa-brands fa-instagram" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')} ></i>
                <i class="fa-brands fa-facebook" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')}></i>
                <i class="fa-brands fa-twitter" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')}></i>
                <i class="fa-brands fa-discord" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')}></i>
              </div>
            </div>
            <div className="seven-get-started" >
              <h1 className="small-headline ready-to-get-started" >Ready to get started?</h1>
              <h1 className="small-text ready-to-get-started-description" >Let's start with a conversation about how we can help you!</h1>
              <div className="broneeri-kõne-seven" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')} >
                <h1 className="small-description white bold broneeri-kõne-text" >Broneeri kõne</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};