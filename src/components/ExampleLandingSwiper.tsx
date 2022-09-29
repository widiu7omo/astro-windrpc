import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function ExampleLandingSwiper() {
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
          src="https://satulisan.com/wp-content/uploads/2021/10/Screenshot_25.png?v=1635354796"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2021/10/Screenshot_24.png?v=1635354841"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2021/10/Screenshot_23.png?v=1635354864"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2021/10/Screenshot_22.png?v=1635354869"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2021/10/Screenshot_21.png?v=1635354874"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-xl"
          alt="T1"
          src="https://satulisan.com/wp-content/uploads/2021/10/Screenshot_20.png?v=1635354880"
        />
      </SwiperSlide>
    </Swiper>
  );
}
