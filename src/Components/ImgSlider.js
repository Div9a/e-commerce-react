import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function ImgSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidestoShow: 1,
    slidestoScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {props.sliderData.map((data) => {
        return (
          <Wrap>
            <img src={data.img} />
          </Wrap>
        );
      })}
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.stick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
