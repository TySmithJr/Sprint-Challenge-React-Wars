import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CharList from "./components/CharList"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [charInfo, setCharInfo] = useState([])
        



useEffect (  () => {
   
  axios.get('https://swapi.co/api/people/')
  .then((response) => {
    console.log("response", response);
    setCharInfo(response.data.results);
   
    // setState(response.data.results);
  })
   
  .catch(error => console => (error))

    console.log("this is what charInfo;", charInfo)
}, []);


    
 

return (
    <div className="App">
     <h1>app render</h1>
     {charInfo.length? <CharList charList= {charInfo}/>: <h1>loading</h1>} 

    </div>

  );
}

console.log(axios);

export default App;
