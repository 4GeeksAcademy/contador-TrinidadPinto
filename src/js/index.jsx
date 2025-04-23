// Import React into the bundle
import React from 'react';
import ReactDOM from 'react-dom/client';
// Include bootstrap npm library into the bundle
import 'bootstrap';
// import './icons.js';
import Counter from "./components/Counter.jsx";

// Include your index.scss file into the bundle
import "../styles/index.css";


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>
    );
}, 1000);