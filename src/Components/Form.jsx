import "../Styles/form.css"

const Form = ({title, children, onSubmit}) => {

    return (
        <div className="form">
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
}

export default Form;