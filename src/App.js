import React, { useState, useEffect } from 'react';

function Document({ title, content }) {
  const handleScroll = (event) => {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      document.querySelector('button').removeAttribute('disabled');
    }
  };

  return (
    <div>
      <div className="title">{title}</div>
      <div className="content" style={{ overflow: 'auto', height: '200px' }} onScroll={handleScroll}>
        {content}
      </div>
    </div>
  );
}

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(res => res.text())
      .then(setText);
  }, []);

  return (
    <div>
      <Document title="Terms and Conditions" content={text} />
      <button disabled>I Agree</button>
    </div>
  );
}

export default App;
