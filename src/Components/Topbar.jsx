import '../Styles/topbar.css'
import logo from '../Assets/Icons/jobLogo.svg'

const Topbar = ({sidebarOpen,setSidebarOpen}) => {

    const handleSidebarOpen = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="top">
            <div className="topLeft">
                <img id="logo" src={logo} alt="Logo" />
                <ul className = "topList">
                    <li className = "topListItem">
                        <a className="link" href="/"> Home </a>
                    </li>
                    <li className = "topListItem">
                        <a className="link" href="/"> Home </a>
                    </li>
                    <li className = "topListItem">
                        <a className="link" href="/"> Home </a>
                    </li>
                    <li className = "topListItem">
                        <a className="link" href="/"> Home </a>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <button className='signInBt'> Sign in </button>
                <i className={"burgerOpen fa-solid " + ((sidebarOpen) ? "fa-xmark" : "fa-bars")} onClick={handleSidebarOpen}></i>
            </div>
        </div>
    );
}

export default Topbar;