import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay, A11y } from "swiper";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
      }}
      modules={[Autoplay,Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="src\assets\imgs\mb.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="src\assets\imgs\mb.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="src\assets\imgs\mb.jpg" alt=""></img>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
