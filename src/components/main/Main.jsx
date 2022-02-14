import React from "react";
import "./Main.css";
import Intro from "../../components/intro/Intro";
import styled, {keyframes} from "styled-components";



const Main = () => {
    return(
        <div className="main">
          <Intro/>
         <p className="nombre_barber">
            <b className="estilo">&mdash; no es solo un corte &mdash;</b>
           <div className="span">
             Avenida Barber
           </div><b className="estilo">&mdash; es un estilo de vida &mdash;</b>
         </p>
         <div className="promo">
           <h2><b><i>Promo Inauguracion!!</i></b></h2>
            <i>Con tu corte una consumición gratis! </i> &#127867;
        </div>
        <div className="reser">
           <h3><b><i>Hace tu reserva por la App</i></b></h3>
            <i>o tambien por Wsp </i> &#128526;
        </div>
        <div className="amigo">
           <h3><b><i>Si es tu cumple</i></b></h3>
            <i>corte o trago gratis</i> &#129395;
        </div>
        </div>
    )
};

export default Main;

