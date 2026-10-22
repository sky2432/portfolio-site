'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { WorkImage } from '@/components/WorkImage';

type Props = {
  imageUrls: string[];
  isSampleImage: boolean;
  thumbnailUrl: string;
};

export function WorkSlider({ imageUrls, isSampleImage, thumbnailUrl }: Props) {
  return (
    <Swiper
      breakpoints={{
        768: {
          centeredSlides: true,
          slidesPerView: 1.3,
          spaceBetween: 40,
        },
      }}
      loop={imageUrls.length > 1}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      {/* 1枚目だけサンプル画像にする */}
      <SwiperSlide>
        <WorkImage imageUrl={thumbnailUrl} isSampleImage={isSampleImage} />
      </SwiperSlide>
      {imageUrls.map((url) => (
        <SwiperSlide key={url}>
          <WorkImage imageUrl={url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
