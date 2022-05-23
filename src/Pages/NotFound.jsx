import '../Styles/notfound.css'
import { Link } from 'react-router-dom'
import Wobble from 'react-reveal/Wobble';

const NotFound = () => {

    return (
        <div className="notFound">
            <Wobble big cascade>
                <div className="errorCard">
                    <h1 id = "codeError">404</h1>
                    <h3 id = "codeDesc"> Page not Found </h3>
                    <Link to="/"><button id = "homeBtn"> Go to Home </button></Link>
                </div>
            </Wobble>
        </div>
    );
}

export default NotFound;