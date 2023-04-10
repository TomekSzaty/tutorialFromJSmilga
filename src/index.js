import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return <h2 id="someId" className="myClass">Hi there !!</h2>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);