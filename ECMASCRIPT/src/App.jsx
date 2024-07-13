// import { useState } from "react";

import "./App.css";
function giaiPT2(a, b, c) {
  if (a === 0) {
    if (b === 0) {
      return c === 0
        ? "Phương trình có vô số nghiệm"
        : "Phương trình vô nghiệm";
    } else {
      let x = -c / b;
      return `Phương trình có một nghiệm x = ${x}`;
    }
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      return "Phương trình vô nghiệm";
    } else if (delta === 0) {
      let x = -b / (2 * a);
      return `Phương trình có nghiệm kép x1 = x2 = ${x}`;
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `Phương trình có hai nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`;
    }
  }
}
console.log(giaiPT2(1, 3, 2));
function App() {
  const giaipt = giaiPT2(1, 3, 2);
  return (
    <>
      <h1>hehe</h1>
      <span className="hehe">{giaipt}</span>
    </>
  );
}

export default App;
