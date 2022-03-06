import React, {useState} from "react";
import './Principal.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Principal = () => {

    function handleSubmit() {
        console.log('GOZUUU')  
    }


    return (
        <div className="login-container">
            <div className="container-title">
                <Title text='Bienvenido: Santiago Mendoza'/>
            </div>
            <div className="form-group">
                Nivel Rutina
                <div className="form-group-label">Principiante</div>
            </div>

            <div className="form-group">
                Objetivo de la Rutina
                <div className="form-group-label">Ganar masa muscular</div>
            </div>
            
            <div className="form-group">
                Día número
                <div className="form-group-label">1</div>
            </div>

            <button className="button-login" onClick={ handleSubmit }>
                COMENZAR
            </button>
        </div>
    )  
};

export default Principal;