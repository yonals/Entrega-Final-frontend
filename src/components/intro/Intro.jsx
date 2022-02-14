import React from "react";
import "./Intro.css";
import ArchivoVideo from "../../recursos/video/intro_prueba_slow.mp4";




const Intro = () => {
    return(
        <div className="video">
            <video className="video" 
            autoPlay
            loop
            muted>
            <source src= {ArchivoVideo} type="video/mp4"/>
            </video>
        </div>
    )
};

export default Intro;


