import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function TestimoniSwiper() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2020/12/testi-jasa-buat-landing-page-bimategarp-558x1024.jpg?v=1608971113"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2020/12/testi-jasa-buat-landing-page-bimategarp-558x1024.jpg?v=1608971113"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2020/12/testi-jasa-buat-landing-page-bimategarp-558x1024.jpg?v=1608971113"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2020/12/testi-jasa-buat-landing-page-bimategarp-558x1024.jpg?v=1608971113"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2020/12/testi-jasa-buat-landing-page-bimategarp-558x1024.jpg?v=1608971113"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2020/12/testi-jasa-buat-landing-page-bimategarp-558x1024.jpg?v=1608971113"
        />
      </SwiperSlide>
    </Swiper>
  );
}
