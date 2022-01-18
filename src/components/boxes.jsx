import react, { useState } from 'react';
//===Form to make boxes ===
const BoxForm = (props) => {
    const [box, setBox] = useState("");
//=== on submit ===
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form onSubmit={ handleSubmit }>
            <h1>Pick box color</h1>
            <textarea onChange={ (e) => setBox(e.target.value)}
            value = { box }//===takes in a color to input in box===
            ></textarea>
            <input type="submit" value="Create" />
        </form>
    );
};

export default BoxForm;