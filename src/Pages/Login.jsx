import Form from '../Components/Form'
import { useState } from 'react'
import "../Styles/login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const errorToast = () => {
    toast.error("Please fill all the spaces");
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswChange = (event) => setPassw(event.target.value)

    return (
        <div className="Login">
            <div className='formContainer'>
                <Form title="Login">
                    <h5>Email:</h5>
                    <input type="text" value={email} placeholder="Email" onChange={handleEmailChange}></input>
                    <h5>Password:</h5>
                    <input type="password" value={passw} placeholder="Password" onChange={handlePasswChange}></input>
                    <br />
                    <br />
                    <button className="sendButton" onClick={errorToast}>Login</button>
                    <ToastContainer position="top-center" />
                    <br />
                    <br />
                    <a href="/login"> Forgot Password? </a>
                </Form>
            </div>
        </div>
    );
}

export default Login;