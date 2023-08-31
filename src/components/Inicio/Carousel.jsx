import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5173/data/news.js');
        const responseData = await response.json();
        setData(responseData);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  

    if (!data || !data.length) return null;


return(
  <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
            
      {data.map((slide) => (
      
        <SwiperSlide key={slide.id} className='w-1/3'>
          
            <img src={slide.image} className="w-full" />
            <div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
              <h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
                {slide.title}
              </h2>
              <p className="text-xs">{slide.date}</p>
              <p className="text-xs sm:text-sm md:text-base w-full h-full ">
                {slide.content}
              </p>
            </div>
           
          </SwiperSlide>  
      ))}

    </Swiper>
  </div>
  
  );
}

export default Carousel;
