import '../Styles/card.css';

const Card = ( {info} ) =>  {
    return (
        <div className="card">
            <img src={info.icon} alt="IconCard"></img>
            <h2>{info.title}</h2>
            <p>{info.desc}</p>
        </div>
    );
}

export default Card;