import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper";
import "./SliderPost.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Card, CardMedia } from "@mui/material";

function Slider({ imgs }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      effect="creative"
      className="swiper-post"
      spaceBetween={0}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      modules={[EffectCreative, Navigation, Pagination]}
      navigation
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      }}
      pagination={pagination}
    >
      {imgs?.map((img, key) => (
        <SwiperSlide key = {key}>
          <Card
            sx={{
              borderRadius: "20px",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: { xs: 250, sm: 400 },
              }}
              image={img}
              alt=""
            ></CardMedia>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
