import React,{Component} from 'react';
import "./Anima.css";
import styled, {keyframes} from 'styled-components';


class Anima extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {

        const animaTexto=keyframes`
        from {
            background-position: 0% 50%;
        }
        to {
            background-position: 100% 50%;
        }
        `
        const Titulo=styled.span`
        background-color: black;
        font-size: 45px;
        text-align: center;
        animation:${animaTexto} 1s linear infinite;
        `
        
        return ( 
            <>
            <Titulo className="span">AVENIDA BARBER</Titulo>
            </>
        );
    }
}
 
export default Anima;