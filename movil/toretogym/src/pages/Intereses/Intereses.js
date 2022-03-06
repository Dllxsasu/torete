import React, {useState} from "react";
import './Intereses.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Intereses = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    

    function handleChange(name, value) {
        if(name === "usuario"){
            setUser(value)
        }
        if(name === "contra"){
            setPassword(value)
        }
        if(name === "name"){
            setNombre(value)
        }
        if(name === "apellidos"){
            setApellido(value)
        }
    };

    function handleSubmit() {
        let account = { nombre, apellido, user, password }
        if(account){
            console.log('account ', account)
        }
    }

    console.log('nombres', nombre);
    console.log('apellidos', apellido);
    console.log('usuario', user);
    console.log('password', password);

    return (
        <div className="login-container">
            <div className="container-title">
                <Title text='Intereses'/>
            </div>
            <div className="form-group">
                <Label text='Objetivo'/>
                <select name="objetivo" className="select-container">
                    <option value="0" selected> </option>
                    <option value="1">Bajar Peso</option>
                    <option value="2">Tonificar cuerpo</option>
                    <option value="3">Ganar masa muscular</option>
                    <option value="4">Otro</option>
                </select>
            </div>
            <div className="form-group">
                <Label text='Nivel'/>
                <select name="nivel" className="select-container">
                    <option value="0" selected> </option>
                    <option value="1">Principiante</option>
                    <option value="2">Medio</option>
                    <option value="3">Profesinal</option>
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