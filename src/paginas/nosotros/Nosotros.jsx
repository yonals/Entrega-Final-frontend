import React from "react";
import  "./Nosotros.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Grid } from "@material-ui/core";
import Peaky from "../../components/peaky/Paeky";



const Nosotros = () =>{
    return (
        <Grid container spacing={0}>

            <Grid item md={12}>
            <Nav/>
            </Grid>

            <Grid item xs={12}>
                <Peaky/>
            </Grid>

            <Grid item xs={12}>
                <Footer/>
            </Grid>
            
        </Grid>
    );
}

export default Nosotros;
