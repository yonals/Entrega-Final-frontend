import React from "react";
import  "./Servicios.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Grid } from "@material-ui/core";
import Caroservi from "../../components/caroservi/Caroservi";


const Servicios = () =>{
    return (
        <Grid className="servi" container spacing={0}>
            <Grid item md={12}>
            <Nav/>
            </Grid>
            <br/><br/><br/><br/><br/><br/>
            <Grid item md={12}>
                <Caroservi/>
            </Grid>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
            
        </Grid>
    );
}

export default Servicios;