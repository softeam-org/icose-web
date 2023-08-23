import React from 'react';

function TextWithLineBreaks({ text }) {
  const lines = text.split('\n');

  return (
    <div className="text-center">
      {lines.map((line, index) => (
        <p key={index} className="">
          {line}
        </p>
      ))}
    </div>
  );
}

export default TextWithLineBreaks;
