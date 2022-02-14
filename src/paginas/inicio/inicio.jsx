import React from "react";
import  "./inicio.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import Anima from "../../components/anima/Anima";
import { Grid } from "@material-ui/core";
import App from "../../components/carousel/Carousel";

const Inicio = () =>{
    return (
        <Grid container spacing={0}>
            <Grid item md={12}>
            <Nav/>
            </Grid>

            <Grid item xs={12}>
            <Main/>
            </Grid>

            <Grid item md={12}>
            <App/>
            </Grid>

            <Grid item xs={12}>
                <Footer/>
            </Grid>
            
        </Grid>
    );
}

export default Inicio;