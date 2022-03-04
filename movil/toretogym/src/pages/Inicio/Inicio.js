import React from "react";
import './Inicio.css';
import SignScreen from "./components/SignScreen/SignScreen";

const Inicio = () => {

    function handleSubmit() {
        console.log('Hola');
    }

    return (
        <div className="inicio-container">
            
            <div className="login-container">
                <SignScreen/>
            </div> 
            <div className="center">
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" onClick={ handleSubmit }>
                        Empezar
                    </button>
                </div>
            </div>
               
        </div>
    )  
};

export default Inicio;