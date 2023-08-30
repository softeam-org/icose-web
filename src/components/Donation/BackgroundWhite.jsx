import React from 'react';

const BackgroundWhite = ({ children }) => {
return (
<div className="flex justify-center items-center">
  <div className="w-auto bg-white rounded-3xl text-sm md:text-base xl:text-lg px-10 text-black font-black py-1">
    {children}
  </div>
</div>
);
};

export default BackgroundWhite;