import React from 'react';
import "../../styles/index.css";

function Counter({ digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne }) {
    console.log(digitFour, digitThree, digitTwo, digitOne);
    return (
        <div className="counter-container">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="digit">{digitSix % 10}</div>
            <div className="digit">{digitFive % 10}</div>
            <div className="digit">{digitFour % 10}</div>
            <div className="digit">{digitThree % 10}</div>
            <div className="digit">{digitTwo % 10}</div>
            <div className="digit">{digitOne % 10}</div>
        </div>
    );
}

export default Counter;