import "../Styles/form.css"

const Form = ({title, children}) => {

    return (
        <div className="form">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

export default Form;