import React from 'react';

function InstagramCard ({ url, caption, permalink }) {
  return (
    <a href={permalink}>
      <div className="flex flex-col justify-around items-center p-4 h-[25rem] shadow-lg rounded-2xl">
        <img src={url} alt="instagram post" className="object-fill h-[16rem] w-[16rem]"></img>
        <p className="text-xl">
          {caption.length > 50 ? `${caption.substring(0, 50)}...` : caption}
        </p>
      </div>
    </a>  
  );
}

export default InstagramCard;
