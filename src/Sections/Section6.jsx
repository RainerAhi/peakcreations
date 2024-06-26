import React from "react";

export const Section6 = () => {

    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

    return (
    <section className="six">

        <div className="six-content" >
            <div className="six-content-top" >
                <h1 className="description bold headline-purple six-content-title-top" >Hinnakiri</h1>
                <h1 className="medium-headline white six-content-title-bottom" >Produtsent, videograaf ja monteerija —<br/> Sinu all-in-one videotiim ühes paketis.</h1>
            </div>
            <div className="six-price-containers" >
                <div className="price-container" >
                   <h1 className="small-headline headline-purple" >Alustaja</h1> 
                   <h1 className="big-text grey" >€1000/kuu</h1>
                   <div className="divider" />
                   <ul className="price-container-list" >  
                    <li className="description white" >8x lühivideot (kuni 60s)</li>
                    <li className="description white" >1x võttepäev (kuni 4h)</li>
                    <li className="description white" >Sisustrateegia</li>
                    <li className="description white" >Personaalne produtsent, videograaf ja monteerija</li>
                    <li className="description white" >Igakuine raport</li>
                   </ul>
                   <div className="broneeri-kõne-hind" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')} >
                        <h1 className="small-description white bold" >Broneeri kõne</h1>
                    </div>
                </div>
                <div className="price-container" >
                    <h1 className="small-headline headline-purple" >Entusiast</h1> 
                   <h1 className="big-text grey" >€1500/kuu</h1>
                   <div className="divider" />
                   <ul className="price-container-list" >  
                    <li className="description white" >12x lühivideot (kuni 60s)</li>
                    <li className="description white" >1x võttepäev (kuni 6h)</li>
                    <li className="description white" >Sisustrateegia</li>
                    <li className="description white" >Personaalne produtsent, videograaf ja monteerija</li>
                    <li className="description white" >Igakuine raport</li>
                   </ul>
                   <div className="broneeri-kõne-hind" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')} >
                        <h1 className="small-description white bold" >Broneeri kõne</h1>
                    </div>
                </div>
                <div className="price-container" >
                    <h1 className="small-headline headline-purple" >Visionäär</h1> 
                   <h1 className="big-text grey" >€1750/kuu</h1>
                   <div className="divider" />
                   <ul className="price-container-list" >  
                    <li className="description white" >16x lühivideot (kuni 60s)</li>
                    <li className="description white" >2x võttepäeva (kuni 6h)</li>
                    <li className="description white" >Sisustrateegia</li>
                    <li className="description white" >Personaalne produtsent, videograaf ja monteerija</li>
                    <li className="description white" >Igakuine raport</li>
                   </ul>
                   <div className="broneeri-kõne-hind" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')} >
                        <h1 className="small-description white bold" >Broneeri kõne</h1>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="background-element-three" />
        <div className="background-element-four" />

    </section>
    )
}