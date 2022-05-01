import imgMan from "../Assets/Images/SuccessMan.png";
import "../Styles/header.css";
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <div className="header">
      <div className="searchContainer">
        <Fade bottom cascade>
            <div>
                <h2> Id enim qui occaecat culpa adipisicing sint eiusmod in. </h2>
                <p> Nostrud id excepteur laborum aliqua culpa labore cillum elit dolor reprehenderit. In minim aute quis ad fugiat id. Laboris ipsum qui do Lorem sit qui enim. Est nulla cillum dolore ut veniam magna pariatur mollit mollit ut et duis.</p>
                <button className="searchBtn"> Search Vacants </button>
            </div>
        </Fade>
      </div>
      <div className="imgContainer">
        <Fade bottom>
            <img id="imgMan" src={imgMan} alt="imageMan" />
        </Fade>
      </div>
    </div>
  );
};

export default Header;
