import '../Styles/topbar.css'
import logo from '../Assets/Icons/jobLogo.svg'

const Topbar = () => {

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
                    <li className = "topListItem">
                        <a className="link" href="/"> Home </a>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <button className='signInBt'> Sign in </button>
            </div>
        </div>
    );
}

export default Topbar;