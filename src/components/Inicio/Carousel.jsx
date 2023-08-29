import React, { useState, useRef, useEffect } from 'react';
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const carousel = useRef(null);

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

  useEffect(() => {
// Here is the logic to get the scroll size
    if (carousel.current) {
      carousel.current.scrollLeft = currentIndex * carousel.current.offsetWidth;
    }
  }, [currentIndex]);

//Here the scroll position is set and passed as index. In this way it is possible to assign the conditional of the labels.
  const handleCarouselScroll = () => {
    if (carousel.current) {
      const scrollPosition = carousel.current.scrollLeft;
      const itemWidth = carousel.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  if (!data || !data.length) return null;

// Here is the logic next on the slide and previous on the slides
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    
    <div className='flex flex-col'>
      <div className='flex flex-row justify-center items-center space-x-5'>
			<div className='w-10'>
        <div className='w-9'>
          <CaretCircleLeft
            size={32}
            onClick={handleLeftClick}
            className='w-8 hover:w-9 hover:h-9 hover:fill-standard-blue  cursor-pointer'
          />
         </div>
				</div>
        <div className="carousel carousel-center w-10/12 flex py-8 space-x-10" ref={carousel} onScroll={handleCarouselScroll}>
          {data.map((slide, slideIndex) => (
            <div id={slide.id} className="flex flex-row carousel-item w-full space-x-10" key={slideIndex}>
              {slide.cards.map((card, cardIndex) => (
                <div className="w-1/3 " key={cardIndex}>
                  <img src={card.image} className="w-full" />
                  <div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
                    <h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
                      {card.title}
                    </h2>
                    <p className="text-xs">{card.date}</p>
                    <p className="text-xs sm:text-sm md:text-base w-full h-full ">
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='w-9'>
          <CaretCircleRight
            size={32}
            onClick={handleRightClick}
            className='w-8 hover:w-9 hover:h-9 hover:fill-standard-blue  cursor-pointer'
          />
        </div>
				
      </div>

      {/* Radio buttons */}
      <div className="flex justify-center w-full h-2 gap-2">
        {data.map((_, slideIndex) => (
          <span
            key={slideIndex}
            className={` w-2 h-2 rounded-full ${
              currentIndex === slideIndex ? 'bg-black' : 'bg-white border border-solid border-black'
            }`}
          >
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
