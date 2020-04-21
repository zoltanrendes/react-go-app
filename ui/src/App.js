import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("/main")
            .then((resp) => {
                setState(resp.data)
            })
            .catch((err) => console.log('Error', err));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello, {state.text}!</p>
            </header>
        </div>
    );
}

export default App;
