import Document from './Document';
import React, { useState, useEffect } from 'react';


function App() {
  const [text, setText] = useState('');
/*
  useEffect(() => {
      fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(res => res.text())
      .then(setText);
  }, []);
*/
useEffect(() => {
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
    .then(response => response.text())
    .then(response => setText(response));
  },[]);
  return (
    <div>
      <Document title="Terms and Conditions" content={text} />
      <button disabled>I Agree</button>
    </div>
  );
}

export default App;
