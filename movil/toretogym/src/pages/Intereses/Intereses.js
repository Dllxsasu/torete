import React, {useState} from "react";
import './Intereses.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Intereses = () => {

    const [objetivo, setObjetivo] = useState('');
    const [nivel, setNivel] = useState('');
    const [dias, setDias] = useState('');
    
    function handleChange(name, value) {
        if(name === "objetivo"){
            setUser(value)
        }
        if(name === "nivel"){
            setNivel(value)
        }
        if(name === "dias"){
            setDias(value)
        }
    };

    function handleSubmit() {
        let account = { objetivo, nivel, dias }
        if(account){
            console.log('account ', account)
        }
    }

    console.log('Objetivo', objetivo);
    console.log('Nivel', nivel);
    console.log('Dias disponibles', dias);

    return (
        <div className="login-container">
            <div className="container-title">
                <Title text='Intereses'/>
            </div>
            <div className="form-group">
                <Label text='Objetivo'/>
                <select name="objetivo" className="select-container">
                    <option value="0" selected> </option>
                    <option value="1">Perder Grasa</option>
                    <option value="2">Tonificar</option>
                    <option value="3">Ganar masa muscular</option>
                    <option value="4">Bajar Peso</option>
                </select>
            </div>
            <div className="form-group">
                <Label text='Nivel'/>
                <select name="nivel" className="select-container">
                    <option value="0" selected> </option>
                    <option value="1">Principiante</option>
                    <option value="2">Medio</option>
                    <option value="3">Alto</option>
                </select>
            </div>
            <div className="form-group">
                <Label text='Disponibilidad de días x semana'/>
                <select name="dias" className="select-container">
                    <option value="0" selected> </option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            
            <button className="button-login" onClick={ handleSubmit }>
                GENERAR RUTINA
            </button>
        </div>
    )  
};

export default Intereses;