import { forwardRef } from "react";

const Input = forwardRef(({title, type, value, placeholder, onChange}, ref) => {
    return (
        <>
            <h5>{title}</h5>
            <input type={type} value={value} placeholder={placeholder} onChange={onChange} ref={ref}></input>
        </>
    );
})

export default Input;