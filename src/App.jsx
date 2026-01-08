import React, { Component } from "react";
import "./App.css";
import MouseTracker from "./MouseTracker";



function App() {
  return (
    <>
    <MouseTracker render={({x, y}) => (
        <p>
         x: {x}  y: {y}
        </p>
    )}/>
    <MouseTracker render={({x, y}) => (
        <div style={{
            position: "absolute",
            top: y,
            left: x,
            backgroundColor: "violet",
            height: "50px",
            width: "50px",
        }}>
            <p>

            </p>
        </div>
    )}
        />
    </>
  )
}

export default App;