import React from "react";
import {Routes, Route} from "react-router-dom";

import routePath from "./routePath";

import Inicio from "./paginas/inicio/inicio";

import Nosotros from "./paginas/nosotros/Nosotros";

import Servicios from "./paginas/servicios/Servicios";

import Micuenta from "./paginas/micuenta/Micuenta";

import Promos from "./paginas/promos/Promos";

const RoutesApp = () => {
    return (
        <>
        <Routes>
        <Route path={routePath.inicio} element={<Inicio/>} />
        <Route path={routePath.nosotros} element={<Nosotros/>} />
        <Route path={routePath.servicios} element={<Servicios/>} />
        <Route path={routePath.micuenta} element={<Micuenta/>} />
        <Route path={routePath.promos} element={<Promos/>} />
        </Routes>
        </>
    );
}

export default RoutesApp;