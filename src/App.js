import React from 'react';
import FileReader from './filereader';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Read file (data.txt)</h2>
      <h4>Display as raw text :</h4>
      <p>
        <FileReader file="data.txt" />
      </p>
      <h4>Display in HTML format :</h4>
      <FileReader file="data.txt" displayType="1" />
    </div>
  );
}

export default App;
