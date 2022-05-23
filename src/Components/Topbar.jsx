import '../Styles/topbar.css'
import logo from '../Assets/Icons/jobLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../Context/AuthContext'
import { applicantOptions, employerOptions } from './consts'

const Topbar = ({sidebarOpen,setSidebarOpen}) => {
    const context = useContext(authContext);
    const navigate = useNavigate();

    const handleSidebarOpen = () => setSidebarOpen(!sidebarOpen);
    const logOut = () => {
        localStorage.removeItem("token");
        context.setAuth({
            id: "",
            name: "",
            email: "",
            role: "",
            logged: false,
        })
        navigate("/login");
    }

    return (
        <div className="top">
            <div className="topLeft">
                <img id="logo" src={logo} alt="Logo" />
                <ul className = "topList">
                    <li className = "topListItem">
                        <Link to="/" className='link'> Home </Link>
                    </li>
                    {context.auth.logged && context.auth.role === "applicant" && applicantOptions.map((option, index) => {
                        return (
                            <li className = "topListItem" key={index}>
                                <Link className="link" to={option.route}> {option.title} </Link>
                            </li>
                        );
                    })}
                    {context.auth.logged && context.auth.role === "employer" && employerOptions.map((option, index) => {
                        return (
                            <li className = "topListItem" key={index}>
                                <Link className="link" to={option.route}> {option.title} </Link>
                            </li>
                        );
                    })}
                    <li className = "topListItem">
                        {context.auth.logged && <p className="link" onClick={logOut}> Log Out </p>}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {!context.auth.logged && <Link to="/signup"><button className='signInBt'> Sign Up </button></Link>}
                {context.auth.logged && <><i className="fa-solid fa-user"></i> <span>{context.auth.name}</span> </>}
                <i className={"burgerOpen fa-solid " + ((sidebarOpen) ? "fa-xmark" : "fa-bars")} onClick={handleSidebarOpen}></i>
            </div>
        </div>
    );
}

export default Topbar;