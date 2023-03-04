import React, { useState } from "react";
import { styled } from "@mui/system";
// import Imagedata from "../ImageData";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.avif";
import image4 from "../../Assets/image4.jpeg";

const MainMenuStyles = styled("div")({
  background: "black",
  width: "100%",
  height: "40vh",
});
const ImageData = [
  {
    image: image1,
  },
  { image: image2 },
  { image: image3 },
  { image: image4 },
];

const MainMenu = () => {
  const [state, setState] = useState(0);

  const length = ImageData.length;

  const NextSlide = () => {
    setState(state === length - 1 ? 0 : state + 1);
  };
  const PrevSlide = () => {
    setState(state === 0 ? length - 1 : state - 1);
  };
  return (
    <>
      <MainMenuStyles>
        {ImageData.map((slide, index) => {
          return (
            <>
              {index === state && (
                // <img src={slide.image}/>
                <img src={slide.image} />
              )}
            </>
          );
        })}
        {/* <div style={{color:'white'}}>hgdjk</div> */}
        <button onClick={PrevSlide}>Prev</button>
        <button onClick={NextSlide}>Next</button>
      </MainMenuStyles>
    </>
  );
};

export default MainMenu;
