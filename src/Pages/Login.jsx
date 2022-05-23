import Form from '../Components/Form'
import { useState, useContext  } from 'react'
import {authContext} from '../Context/AuthContext'
import "../Styles/login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Components/Input';
import { useNavigate } from "react-router-dom";
import { post } from '../api';


const errorToast = message => {
    toast.error(message);
}

const Login = () => {
    const context = useContext(authContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswChange = (event) => setPassw(event.target.value)

    const login = (event) => {
        event.preventDefault();

        post("/api/auth/login",{
            email, 
            password: passw
        })
        .then(res => {
            const {token, user} = res.data;
            localStorage.setItem("token", token)
            context.setAuth({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                logged: true
            })
            navigate('/',{
                replace: true
            });
        })
        .catch(err => {
            errorToast("Invalid Credentials");
        })
    }

    return (
        <div className="Login">
            <div className='formContainer'>
                <Form title="Login" onSubmit={login}>
                    <Input title="Email:" type="email" value={email} placeholder="Email" onChange={handleEmailChange} />
                    <Input title="Password:" type="password" value={passw} placeholder="Password" onChange={handlePasswChange} />
                    <br />
                    <br />
                    <button className="sendButton">Login</button>
                    <br />
                    <br />
                    <ToastContainer position="top-center" />
                    <p id='forgotBtn' onClick={() => errorToast("No tenemos forma de recuperar tu contraseña aún...")}> Forgot Password? </p>
                </Form>
            </div>
        </div>
    );
}

export default Login;