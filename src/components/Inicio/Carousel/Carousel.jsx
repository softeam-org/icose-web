import Title from "@/components/Title";
import Body from "@/components/Body";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//imports swiper
import {Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
//imports swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css';
// imports instagram post components
import InstagramCard from './instagram-card';

const maxLength = 8;

function Carousel() { 
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = import.meta.env.VITE_INSTAGRAM_TOKEN;
        const fields = "media_url,media_type,caption,permalink";
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
        const response = await axios.get(url);
        // garante que a legenda da foto existe
        const caption = response.data.data.filter((post) => post.caption ? true : false)
        // garante que o tipo de conteudo é imagem
        const images = caption.filter((post) => post.media_type != "VIDEO").slice(0,maxLength);
        setData(images);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);  

  if (!data || !data.length) return null;
  return(
    <Body>
      <div className="space-y-4">
        <Title
          color="#007aff"
          content="Confira nosso Instagram"
        />
        <Swiper
          spaceBetween={40}
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
          {data.map((post) => (
            <SwiperSlide key={ crypto.randomUUID() } className='w-10 pb-16 border-black'>
              <div className='custom-slide'>
                <InstagramCard
                  url={post.media_url}
                  caption={post.caption}
                  permalink={post.permalink}
                /> 
              </div>
            </SwiperSlide>  
          ))}
        </Swiper>
      </div>
    </Body>
  );
}

export default Carousel;
