import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import "./App.css";
import Characters from "./components/Characters";
const axios = require("axios");
// import axios from 'axios'

function App() {
  const [starWarsCharacters, setCharacters] = useState(undefined);
  useEffect(() => {
  //   const fetchData = useCallback(() => {
  //     axios.get("https://swapi.dev/api/people")
  //       .then((response) => {
  //         setCharacters(response.data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }, []);
  //
  //   useEffect(() => {
  //     fetchData()
  //   }, [fetchData]);

    async function fetchData() {
      const res = await fetch("https://swapi.dev/api/people");
      res
        .json()
        .then(res => {
          console.log(res);
          setCharacters(res.results);
        })
        .catch((err => console.log(err)))
    }
    fetchData();
  }, []);

  console.log("setCharacters: " + setCharacters);
  console.log("starWarsCharacters: " + starWarsCharacters);

  if (starWarsCharacters === undefined) {
    return (
      <div>
        <Header />
        Loading characters
      </div>
    );
  }

  return (
    <div>
      <Header />
      <br />
      <Characters myArray={starWarsCharacters} />
      {/*<span>{JSON.stringify((starWarsCharacters.results))}</span>*/}
    </div>
  );
}

export default App;


