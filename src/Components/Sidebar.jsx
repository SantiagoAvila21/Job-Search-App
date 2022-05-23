import "../Styles/sidebar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../Context/AuthContext'
import { applicantOptions, employerOptions } from './consts'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const context = useContext(authContext);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        context.setAuth({
            id: "",
            name: "",
            email: "",
            role: "",
            logged: false,
        })
        setSidebarOpen(false);
        navigate("/login");
    }

    const closeSidebarOnLink = () => setSidebarOpen(false);
    
    return (
        <div className={(sidebarOpen) ? "sideOpen show" : "sideOpen" }>
            <ul className = "sideList">
                <li className = "sideListItem">
                    <Link to="/" className='link' onClick={closeSidebarOnLink}> Home </Link>
                </li>
                {context.auth.logged && context.auth.role === "applicant" && applicantOptions.map((option, index) => {
                    return (
                        <li className = "sideListItem" key={index}>
                            <Link className="link" to={option.route} onClick={closeSidebarOnLink}> {option.title} </Link>
                        </li>
                    );
                })}
                {context.auth.logged && context.auth.role === "employer" && employerOptions.map((option, index) => {
                    return (
                        <li className = "sideListItem" key={index}>
                            <Link className="link" to={option.route} onClick={closeSidebarOnLink}> {option.title} </Link>
                        </li>
                    );
                })}
                <li>
                    {!context.auth.logged && <Link to="/signup" onClick={closeSidebarOnLink}><button className='sideSignBt'> Sign Up </button></Link>}
                    {context.auth.logged && <button className='sideSignBt' onClick={logOut}> Log Out </button>}
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;