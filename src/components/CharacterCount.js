import React, { useState } from 'react';
import './CharacterCount.css'; // Import the CSS file

function CharacterCount() {
  const [text, setText] = useState('');

  const characterCount = text.length;

  return (
    <div className="container">
      <h2 className="heading">Character Count</h2>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        className="textarea"
      />
      <p className="count">Characters: <strong>{characterCount}</strong></p>
    </div>
  );
}

export default CharacterCount;
