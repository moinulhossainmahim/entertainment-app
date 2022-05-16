import Slider from "react-slick";
import useStyles from "./styles";
import SliderImages from "../../utilities/SliderImage";

export default function HomeSlider() {
  const classes = useStyles();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <div className={classes.sliderContainer}>
      <Slider {...settings}>
        {SliderImages.map((image) => {
          return (
            <div key={image.id}>
              <img
                src={image.src}
                alt='slider-image'
                style={{ width: "100%", height: "60vh", objectFit: "fill" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
