import React from 'react';

function TextWithLineBreaks({ text, classText}) {
  const lines = text.split('\n');

  return (
    <div className={classText}>
      {lines.map((line, index) => (
        <p key={index} >
          {line}
        </p>
      ))}
    </div>
  );
}

export default TextWithLineBreaks;
