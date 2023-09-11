import React, { useState, useEffect } from 'react';

//imports swiper
import {Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
//imports swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css';


function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5173/data/news.js');
        const responseData = await response.json();
        setData(responseData);
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
        slidesPerView={1}
        navigation
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}         
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1500:{
            slidesPerView: 4,
            spaceBetween: 40,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >   
      {data.map((slide) => (
        <SwiperSlide key={slide.id} className='w-10 pb-16 ' >
          <div className='custom-slide'>
            <img src={slide.image} className=" w-full" />
            <div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
                <h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
                  {slide.title}
                </h2>
                <p className="text-xs">{slide.date}</p>
                <p className="text-xs sm:text-sm md:text-base w-full h-full ">
                  {slide.content}
                </p>
            </div> 
          </div>
          </SwiperSlide>  
      ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
