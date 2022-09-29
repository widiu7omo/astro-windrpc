import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function ExamplePageSpeedSwiper() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2022/07/gtmetrix-wifiplus.png?v=1657084176"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2022/07/gtmetrix-whitediary.png?v=1657084173"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2022/07/gtmetrix-waralabaskincare.png?v=1657084168"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2022/07/gtmetrix-upgraze.png?v=1657084164"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2022/07/gtmetrix-toyotayarisjakarta.png?v=1657084161"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2022/07/gtmetrix-suksesngiklan.png?v=1657084158"
        />
      </SwiperSlide>
    </Swiper>
  );
}
