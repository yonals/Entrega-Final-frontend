import React from "react";
import "./Promos.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Grid } from "@material-ui/core";
import Construccion from "../../components/enconstru/Construccion";

const Promos = () =>{
    return (
        <Grid container spacing={0}>
            <Grid item md={12}>
            <Nav/>
            </Grid>

            <Grid item xs={12}>
                <Construccion/>
            </Grid>

            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    );
}

export default Promos;

