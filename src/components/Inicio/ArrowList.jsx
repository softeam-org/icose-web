import React from 'react';
import { CaretRight } from "@phosphor-icons/react";

const ArrowList = ({ items }) => {
  return (
    <div className="flex flex-col gap-8 font-medium	 text-base md:text-lg xl:text-xl">
      {items.map((item, index) => (
        <div key={index} className="flex items-start">
          <CaretRight size={32} className="mt-1 w-10 h-5" />
          <p className='w-full'> {item}</p>
        </div>
      ))}
    </div>
  );
};

export default ArrowList;
