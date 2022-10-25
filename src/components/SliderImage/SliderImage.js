import { useState, useEffect } from "react";
import SkillsPage from "../SkillsPage/SkillsPage";

import classes from "./SliderImage.module.css";
import image1 from "./sliderImages/sliderImage1.png";
import image2 from "./sliderImages/sliderImage2.png";
import image3 from "./sliderImages/sliderImage3.png";
import image4 from "./sliderImages/sliderImage4.png";
import image5 from "./sliderImages/sliderImage5.png";
import image6 from "./sliderImages/sliderImage6.png";
const SliderImage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const allImages = [image1, image2, image3, image4, image5, image6];
  const [turned, setIsTurned] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 5 ? selectedImage + 1 : 0
      );
    }, 2000);
  }, []);

  const turnPageHandler = () => {
    setIsTurned(true);
  };

  return (
    <>
      {!turned && (
        <div className={classes.sliderPage}>
          <div className={classes.sliderPageHeading}>
            LIFE AT PRIME LIFESPACE
          </div>
          <div className={classes.description}>
            We believe when everyone is moving forward together then success
            takes care of itself. Here is a glimpse of what's it's like to be a
            member of Prime Lifespace Team
          </div>
          <div className={classes.imageSlider}>
            <div className={classes.left}>
              <img
                width={650}
                height={450}
                src={allImages[selectedImage]}
                onClick={turnPageHandler}
              />
            </div>
            <div className={classes.right}>
              <img
                width={450}
                height={350}
                src={allImages[(selectedImage + 1) % 6]}
              />
            </div>
            <div classNamee={classes.buttonFixed}>
              <div className={classes.button}>
                <button>P</button>
                <span> 0{selectedImage + 1}</span>
                <span>------</span>
                <span>06 </span>
                <button>N</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {turned && (
        <div>
          <SkillsPage />
        </div>
      )}
    </>
  );
};

export default SliderImage;
