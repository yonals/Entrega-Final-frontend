import React from "react";
import  "./Micuenta.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Grid } from "@material-ui/core";
import MainCuenta from "../../components/maincuenta/MainCuenta";




const Micuenta = () =>{
    return (
        <Grid container spacing={0}>
            <Grid item md={12}>
            <Nav/>
            </Grid>

            <Grid item md={12}>
                <MainCuenta/>
            </Grid>

            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    );
}

export default Micuenta;

