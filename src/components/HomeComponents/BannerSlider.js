import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay ,Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import slider custom style
import "./banner_slider.css";

const  bannerImgList = [
    "https://phantom-marca.unidadeditorial.es/5f0f361710935a61f3e5dfe59c2716fe/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/06/16545282919929.jpg",
    "https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2017/03/01195048/Mortgage-Loans-in-India.jpg?fit=945%2C630&ssl=1",
    "https://media.istockphoto.com/id/1328126737/photo/sign-a-house-sale-agreement.jpg?b=1&s=170667a&w=0&k=20&c=Kcdx2iWJ2oPmYCcmaOUg0qUKSdMAFX80nSn_-nBBkiY=",
    "https://www.stonerealestate.com.au/wp-content/uploads/2020/04/digital-mortgage.jpg",
    "https://www.castanet.net/content/2021/6/aprilpic_p3538115.jpg"
]
const BannerSlider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                autoplay={{delay: 2500, disableOnInteraction: false,}}
                loop={true}
                className="mySwiper"
                
            >
                {
                    bannerImgList.map(imgEl =><SwiperSlide>
                        <img src={imgEl} alt="" />
                    </SwiperSlide> )
                }
            </Swiper>
        </>
    );
};

export default BannerSlider;