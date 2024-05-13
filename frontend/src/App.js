import { React } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1> Hello World! </h1>
      <h2> Hi there </h2>
      <h3> wassup </h3>
      <h3> ayyyy! </h3>
      <MyButton/>

    </div>
  );
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default App;