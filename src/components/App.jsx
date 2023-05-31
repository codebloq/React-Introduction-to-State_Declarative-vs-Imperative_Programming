import React from "react";

//UI dependent upon the value of State-Variable: Declarative programming - declaring the value of an item
var isDone = false;

const strikeThrough = { textDecoration: "line-through" };

// function strike() {
//   isDone = true;
// }

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

// function unStrike() {
//   isDone = false;
// }

function unStrike() {
  document.getElementById("root").style.textDecoration = "none";
}

function App() {
  return (
    <div>
      <p style={isDone ? strikeThrough : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
