"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyle,
  btnStyle,
  iconsStyle,
}: {
  containerStyle: string;
  btnStyle: string;
  iconsStyle: string;
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button
      title="Previous"
        className={btnStyle + iconsStyle}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
      title="Next"
        className={btnStyle + iconsStyle}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
