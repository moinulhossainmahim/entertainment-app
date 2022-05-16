import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import useStyles from "./styles";
import { Cast } from "./../../actionTypes";

type Casts = {
  casts: Cast[];
};

/* export default function CastSlider({ casts }: Casts) {
  const filterCasts = casts.filter((cast) => cast.profile_path);
  const classes = useStyles();
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {filterCasts.map((cast) => {
        return (
          <div key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
              className={classes.carouselImg}
            />
          </div>
        );
      })}
    </Slider>
  );
} */

export default function CastSlider({ casts }: Casts) {
  const [totalShow, setTotalShow] = useState(5);
  const sliderElement = useRef<HTMLDivElement>(null!);

  const filterCasts = casts.filter((cast) => cast.profile_path);
  const classes = useStyles();

  const changeTotalShow = () => {
    let totalItems = Math.round(sliderElement.current.offsetWidth / 70);
    if (totalItems > casts.length) {
      totalItems = casts.length;
    }
    setTotalShow(totalItems);
  };

  useEffect(() => {
    changeTotalShow();
    window.addEventListener("resize", changeTotalShow);
    return () => window.addEventListener("resize", changeTotalShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: totalShow,
    slidesToScroll: 1,
  };
  return (
    <div ref={sliderElement}>
      <Slider {...settings}>
        {filterCasts.map((cast) => {
          return (
            <div key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                className={classes.carouselImg}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
