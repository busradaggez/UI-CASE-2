'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const SwiperPage = () => {
    return (
        <div className="container mx-auto mt-32 mb-24 responsive">
            <div className="text-center mt-16">
                <h2 className="text-3xl font-semibold text-mycolor4 mb-8">CHECKOUT OUR APP INTERFACE LOOK</h2>
                <p className="text-mycolor3 text-lg max-w-2xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
            </div>

            <Swiper
                className="swiper-container flex justify-center items-center mt-16 mb-24"
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={-80}
                slidesPerView={4} // Görünür slayt sayısı
                navigation={true} // Sağ-sol oklar
                pagination={{ clickable: true, }}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 1, // Döndürme efekti yok
                    stretch: 30, // Görsellerin kenarlara boşluk bırakması
                    depth: 250, // Perspektif derinliği
                    modifier: 1,
                    slideShadows: false, // Gölgeleri kaldırabilirsiniz
                }}
            >
                <SwiperSlide>
                    <img src="/phone7.png" alt="Phone 7" className='mb-24' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/phone3.png" alt="Phone 3" className='mb-24' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/phone4.png" alt="Phone 4" className='mb-24' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/phone5.png" alt="Phone 5" className='mb-24' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/phone6.png" alt="Phone 6" className='mb-24' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperPage;
