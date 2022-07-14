import React from "react"
import ReactDOM from "react-dom"

// component file
import TodoContainer from "./functionBased/components/TodoContainer";
// StyleSheet
import "./functionBased/App.css";

ReactDOM.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>, 
    document.getElementById("root")
)