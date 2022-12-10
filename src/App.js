import "./App.css";
import React from "react";
import GameBoard from "./components/GameBoard";
import PlaySquare from "./components/PlaySquare";
function App() {
  return (
    <div className="App">
      <h1>Noughts and Crosses</h1>
      <GameBoard />
    </div>
  );
}

export default App;
