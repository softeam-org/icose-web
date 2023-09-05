import React from 'react';

const BackgroundWhite = ({ children }) => {
return (
<div className="flex justify-center items-center w-44 md:w-auto">
  <div className="bg-white text-xs rounded-3xl text-sm md:text-base xl:text-lg xl:w-auto px-12 text-black font-black py-1">
    {children}
  </div>
</div>
);
};

export default BackgroundWhite;