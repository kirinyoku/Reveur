import { useState, useMemo, useCallback } from 'react';
import { sliderImages } from '../utils/data';
import SliderArrow from '../ui/SliderArrow';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = useCallback(() => {
    if (currentSlide === 0) {
      setCurrentSlide(sliderImages.length - 1);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  }, [currentSlide, sliderImages]);

  const nextSlide = useCallback(() => {
    if (currentSlide === sliderImages.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  }, [currentSlide, sliderImages]);

  const position = useMemo(() => {
    return `${-currentSlide * 100}vw`;
  }, [currentSlide]);

  const sliderWidth = useMemo(() => {
    return `${sliderImages.length * 100}vw`;
  }, [sliderImages]);

  return (
    <div className="relative h-[calc(100vh-5.625rem)] w-full overflow-hidden">
      <div
        style={{ width: `${sliderWidth}`, transform: `translateX(${position})` }}
        className={`h-full flex transition-transform duration-700 md:duration-1000`}>
        {sliderImages.map((imageURL) => {
          return (
            <img
              className="w-screen h-full object-cover object-top"
              key={imageURL}
              src={imageURL}
              alt=""
            />
          );
        })}
      </div>
      <div className="flex justify-between absolute left-0 right-0 m-auto bottom-12 w-20">
        <SliderArrow direction="left" onClick={prevSlide} />
        <SliderArrow direction="right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
