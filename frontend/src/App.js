import { React } from "react";
import ReactSearchBox from "react-search-box";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1> Welcome! </h1>
      <h3> <MyButton/> </h3>
      <ReactSearchBox placeholder="Where would you like to go?" value="Doe"  callback = {(record) => console.log(record)} />
    </div>
  );
}

function MyButton() {
  return (
    <button>
      Search
    </button>
  );
}

export default App;