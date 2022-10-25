import classes from "./SkillsPage.module.css";
import image1 from "./skillsImages/image1.jpg";
import image2 from "./skillsImages/image2.jpg";
import image3 from "./skillsImages/image3.jpg";
import image4 from "./skillsImages/image4.jpg";
import image5 from "./skillsImages/image5.png";

import { useEffect, useState } from "react";
const SkillsPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const allImages = [image1, image2, image3, image4, image5];
  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 4 ? selectedImage + 1 : selectedImage
      );
    }, 6000);
  }, []);
  return (
    <div className={classes.skillsPage}>
      <div className={classes.skillsPageHeading}> BUILDING CHANGE</div>
      <div className={classes.body}>
        <div className={classes.left}>
          <img
            className={classes.first}
            width={450}
            height={450}
            src={allImages[selectedImage - 1]}
            alt=""
          />
          <img
            className={classes.second}
            width={450}
            height={450}
            src={allImages[selectedImage]}
            alt=""
          />
        </div>
        <div className={classes.right}>
          {selectedImage >= 0 && (
            <div className={classes.rightDiv}>
              <div className={classes.alphabet}>P</div>
              <div className={classes.heading}>
                PROBLEM SOLVING SKILLS
                <p>We believe to nurture problem solvers who lead better</p>
              </div>
            </div>
          )}
          {selectedImage > 0 && (
            <div className={classes.rightDiv}>
              <div className={classes.alphabet}>R</div>
              <div className={classes.heading}>
                RELIABILITY
                <p>We believe transparency is the first step to anything</p>
              </div>
            </div>
          )}
          {selectedImage > 1 && (
            <div className={classes.rightDiv}>
              <div className={classes.alphabet}>I</div>
              <div className={classes.heading}>
                INNOVATIVE THINKING
                <p>We encourage Innovative Ideas and improvise new things</p>
              </div>
            </div>
          )}
          {selectedImage > 2 && (
            <div className={classes.rightDiv}>
              <div className={classes.alphabet}>M</div>
              <div className={classes.heading}>
                MANAGEMENT SKILLS
                <p>We thrive on good communication and motivation</p>
              </div>
            </div>
          )}
          {selectedImage > 3 && (
            <div className={classes.rightDiv}>
              <div className={classes.alphabet}>E</div>
              <div className={classes.heading}>
                ENGAGEMENT
                <p>Team work is the secret to achieve uncommon things</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
