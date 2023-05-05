import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination,Autoplay } from "swiper";
import "./SliderPost.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';


function Slider() {
  return (
    <Swiper
      className="swiper-post"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
      }}
      modules={[Autoplay,Navigation, Pagination]}
      navigation
      pagination={{ 
        clickable: true,
        dynamicBullets: true
         }}
    >
      <SwiperSlide>
        <img className = "slider-post-img" src="src\assets\imgs\mb.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className = "slider-post-img" src="src\assets\imgs\sotck.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className = "slider-post-img" src="src\assets\imgs\mb.jpg" alt=""></img>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;