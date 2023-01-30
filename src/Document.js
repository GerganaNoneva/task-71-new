//import React, { useState, useEffect } from 'react';

function Document({ title, content }) {
  const handleScroll = (event) => {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      document.querySelector('button').removeAttribute('disabled');
    }
  };

  return (
<section>
      <h2 className="title">{title}</h2>
      <article className="content" style={{ overflow: 'auto', height: '200px' }} onScroll={handleScroll}>
        {content}
      </article>
      <button disabled>I Agree</button>
 </section>
  );
}

export default Document;

/*
    <div>
      <div className="title">{title}</div>
      <div className="content" style={{ overflow: 'auto', height: '200px' }} onScroll={handleScroll}>
        {content}
      </div>
    </div>*/

/*
<section>
      <h2 className="title"></h2>
      <article

        onScroll={(e) => handleScroll(e)}
      >
        {content}
      </article>
      <button disabled={disable}>I Agree</button>
    </section>*/ 
