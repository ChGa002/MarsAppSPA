import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NASA from "./components/NASA";
import TitleParagraphImageComponent from "./components/TitleParagraphImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <TitleParagraphImageComponent title={"Just a cat"} p1={"paragraph1"} p2={"paragraph2"} image={"http://placekitten.com/200/300"}></TitleParagraphImageComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <NASA></NASA>
      </header>
    </div>
  );
}

export default App;
