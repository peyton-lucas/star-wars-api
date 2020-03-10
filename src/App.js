import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [hasError, setErrors] = useState(false);
  const [starWarsCharacters, setCharacters] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.co/api/people");
      res
        .json()
        .then(res => setCharacters(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  const characters = ["C3PO", "R2D2"];

  return (
    <div>
      <Header />
      <Characters myArray={starWarsCharacters.results} />
      {/*<span>{JSON.stringify((starWarsCharacters.results))}</span>*/}
    </div>
  );
}

export default App;


