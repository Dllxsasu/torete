import React, {useState} from "react";
import './Login.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value) {
        if(name === "usuario"){
            setUser(value)
        }else{
            setPassword(value)
        }
    };

    function handleSubmit() {
        let account = { user, password }
        if(account){
            console.log('account ', account)
        }
    }

    console.log('usuario', user);
    console.log('password', password);

    return (
        <div className="login-container">
            <div className="container-title">
                <Title text='Bienvenido'/>
            </div>
            <Input 
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Usuario'
                }}
                handleChange={handleChange}
            />
            <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Contraseña'
                }}
                handleChange={handleChange}
            />
            <button className="button-login" onClick={ handleSubmit }>
                ACCEDER
            </button>
            <button className="button-login-cuenta" onClick={ handleSubmit }>
                CREAR NUEVA CUENTA
            </button>
        </div>
    )  
};

export default Login;