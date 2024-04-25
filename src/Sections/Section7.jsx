import React, { useRef, useState } from "react";
import Accordion from "../Accordion";

export const Section7 = () => {
  

  return (
    <section className="seven">
      <div className="seven-content" >
        <h1 className="medium-headline" >Tekkis küsimusi?</h1>
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
    </section>
  );
};