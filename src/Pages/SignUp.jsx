import Form from '../Components/Form'
import { useState, useContext } from 'react'
import { authContext } from '../Context/AuthContext';
import "../Styles/signup.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from 'react-router-dom'
import Input from '../Components/Input';
import { post } from '../api';

const errorToast = message => {
    toast.error(message);
}

const ToastSuccess = name => {
    toast.success(`User Created Successfully`)
}

const SignUp = () => {
    const context = useContext(authContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("employer");

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswChange = (event) => setPassw(event.target.value)
    const handleUsernameChange = (event) => setUsername(event.target.value)
    const handleRoleChange = (event) => setRole(event.target.value)

    const signUp = (event) => {
        event.preventDefault();
        post("/api/auth/signup", {
            name: username,
            email,
            password: passw,
            role
        })
        .then(({data}) => {
            const {token, user} = data;
            localStorage.setItem("token", token)
            context.setAuth({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                logged: true
            });
            ToastSuccess(user.name);
            navigate('/',{
                replace: true
            });
        })
        .catch(err => {
            errorToast(err.response.data.message)
        })
    }

    return (
        <div className="SignUp">
            <div className='formContainer'>
                <Form title="Sign Up" onSubmit={signUp}>
                    <Input title="Username:" type="text" value={username} placeholder="Username" onChange={handleUsernameChange} />
                    <Input title="Email:" type="email" value={email} placeholder="Email" onChange={handleEmailChange} />
                    <Input title="Password:" type="password" value={passw} placeholder="Password" onChange={handlePasswChange} />
                    <br />
                    <br />
                    <h5>Select Role: </h5>
                    <select name="select" value={role} onChange={handleRoleChange}>
                        <option value="employer">Employer</option>
                        <option value="applicant">Applicant</option>
                    </select>
                    <br />
                    <br />
                    <button className="sendButton">Sign Up</button>
                    <ToastContainer position="top-center" />
                    <br />
                    <Link to="/login">Already has an account? Log in</Link>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;