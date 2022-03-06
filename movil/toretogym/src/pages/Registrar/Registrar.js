import React, {useState} from "react";
import './Registrar.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Registrar = () => {

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
                <Title text='Registar'/>
            </div>
            <div className="form-group">
                <Label text='Nombres'/>
                <Input 
                    attribute={{
                        id: 'name',
                        name: 'name',
                        type: 'text',
                        placeholder: ''
                    }}
                    handleChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Label text='Apellidos'/>
                <Input 
                    attribute={{
                        id: 'apellidos',
                        name: 'apellidos',
                        type: 'text',
                        placeholder: ''
                    }}
                    handleChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Label text='Usuario'/>
                <Input 
                    attribute={{
                        id: 'usuario',
                        name: 'usuario',
                        type: 'text',
                        placeholder: ''
                    }}
                    handleChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Label text='Contraseña'/>
                <Input 
                    attribute={{
                        id: 'contra',
                        name: 'contra',
                        type: 'password',
                        placeholder: ''
                    }}
                    handleChange={handleChange}
                />
            </div>
            
            <button className="button-login" onClick={ handleSubmit }>
                REGISTRAR
            </button>
        </div>
    )  
};

export default Registrar;