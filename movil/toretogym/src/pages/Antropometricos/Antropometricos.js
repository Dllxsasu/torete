import React, {useState} from "react";
import './Antropometricos.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Antropometricos = () => {

    const [peso, setPeso] = useState('');
    const [talla, setTalla] = useState('');
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('');
    

    function handleChange(name, value) {
        if(name === "peso"){
            setPeso(value)
        }
        if(name === "talla"){
            setTalla(value)
        }
        if(name === "edad"){
            setEdad(value)
        }
        if(name === "sexo"){
            setSexo(value)
        }
    };

    function handleSubmit() {
        let account = { peso, talla, edad, sexo }
        if(account){
            console.log('account ', account)
        }
    }

    console.log('peso', peso);
    console.log('talla', talla);
    console.log('edad', edad);
    console.log('sexo', sexo);

    return (
        <div className="login-container">
            <div className="container-title">
                <Title text='Datos antropométricos'/>
            </div>
            <div className="form-group">
                <Label text='Peso (kg)'/>
                <Input 
                    attribute={{
                        id: 'peso',
                        name: 'peso',
                        type: 'text',
                        placeholder: ''
                    }}
                    handleChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Label text='Talla (m)'/>
                <Input 
                    attribute={{
                        id: 'talla',
                        name: 'talla',
                        type: 'text',
                        placeholder: ''
                    }}
                    handleChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Label text='Edad'/>
                <Input 
                    attribute={{
                        id: 'edad',
                        name: 'edad',
                        type: 'text',
                        placeholder: ''
                    }}
                    handleChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Label text='Sexo'/>
                <select name="sexo" className="select-container">
                    <option value="1" selected>Masculino</option>
                    <option value="2">Femenino</option>
                </select>
            </div>
            
            <button className="button-login" onClick={ handleSubmit }>
                CONTINUAR
            </button>
        </div>
    )  
};

export default Antropometricos;