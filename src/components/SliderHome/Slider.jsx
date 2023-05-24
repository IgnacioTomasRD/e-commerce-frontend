import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import "./Slider.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


function Slider() {
  return (
    <Swiper
      className="swiper-hero"
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
        <img className="slider-home-img" src="src\assets\imgs\wp6.jpg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="slider-home-img" src="src\assets\imgs\coches-bmw.jpeg" alt=""></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="slider-home-img" src="src\assets\imgs\mcclaren.jpg" alt=""></img>
      </SwiperSlide>
      <KeyboardDoubleArrowDownIcon className='flecha' fontSize="100rem"/>
      <span className="logo-motor-fortuna-slide"/>
    </Swiper>
  );
}

export default Slider;
