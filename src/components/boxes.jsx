import react, { useState } from 'react';

const BoxForm = (props) => {
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form onSubmit={ handleSubmit }>
            <h1>Pick box color</h1>
            <textarea onChange={ (e) => setBox(e.target.value)}
            value = { box }
            ></textarea>
            <input type="submit" value="Create" />
        </form>
    );
};

export default BoxForm;