import react, { useState } from 'react';

//===Box Displays===
const BoxDisplay = (props) => {
    //===box color will take value from form===
    return (
        <div style={{display: 'inline-flex'}}>
            <div className='box1' 
            style={{height: '40px', width: '40px'
            , backgroundColor: 'red', border: 'solid', margin: '15px'}} ></div>
            <div className='box2' 
            style={{height: '40px', width: '40px'
            , backgroundColor: 'red', border: 'solid', margin: '15px'}} ></div>
            <div className='box3' 
            style={{height: '40px', width: '40px'
            , backgroundColor: 'red', border: 'solid', margin: '15px'}} ></div>
        </div>
    );
};

export default BoxDisplay;