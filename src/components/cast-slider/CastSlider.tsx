import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./styles";
import { Cast } from "./../../actionTypes";
import { image } from "../../images/image";

type Casts = {
  casts: Cast[];
};

export default function CastSlider({ casts }: Casts) {
  const classes = useStyles();
  const carouselProps = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...carouselProps}>
        {casts.map((cast) => {
          return (
            <div key={cast.id}>
              <img
                src={
                  cast.profile_path === null || undefined
                    ? image
                    : `https://image.tmdb.org/t/p/w185${cast.profile_path}`
                }
                alt='carousel'
                className={classes.carouselImg}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
