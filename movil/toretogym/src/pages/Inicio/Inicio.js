import React from "react";
import './Inicio.css';
import SignScreen from "./components/SignScreen/SignScreen";
import Login from "../Login/Login";

const Inicio = () => {

    function handleSubmit() {
        console.log('Hola');
        //this.props.navigation.navigate('../Login/Login');
        window.location = '../Login/Login';
    }

    return (
        <div className="inicio-container">

            <SignScreen/>
             
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