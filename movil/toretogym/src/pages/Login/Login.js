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
            <Title text='Soy un títullo'/>
            <Label text='Usuario'/>
            <Input 
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese Usuario'
                }}
                handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese Contraseña'
                }}
                handleChange={handleChange}
            />
            <button onClick={ handleSubmit }>
                Ingresar
            </button>
           
        </div>
    )  
};

export default Login;