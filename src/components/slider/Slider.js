import { ArrowBack, ArrowForward, SavedSearch } from "@mui/icons-material";
import "./slider.css";
import { useState } from "react";
import { posterImg } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== posterImg.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === posterImg.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(posterImg.length);
    }
  };


  return (
    <div className="slider-container">
      <div className="arrow left-arr" onClick={prevSlide}>
        <ArrowBack />
      </div>
      <div className="slider-wrapper">
        {posterImg.map((poster, index) => {
          return (
            <div key={index} className={slideIndex === index+1 ? "slide active-anim" : "slide"}>
              <div className="image-cotainer">
                <img className="poster-img" src={poster.img} alt="" />
              </div>
              <div className="info-container">
                <p className="desc">In this season,Find the best🔥</p>
                <p className="title">
                  Exclusive collection
                  <br /> for everyone
                </p>
                <button className="explore-button">
                  Explore now
                  <SavedSearch style={{ marginLeft: "10px" }} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrow right-arr" onClick={nextSlide}>
        <ArrowForward />
      </div>
    </div>
  );
};

export default Slider;
