import classes from "./LandingPage.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {
  const history = useHistory();
  const [turned, setIsTurned] = useState(false);

  const turnPageHandler = () => {
    history.push("./sliderImage");
    setIsTurned(true);
  };
  return (
    <div>
      <div className={classes.heading}>
        <div>EXPERTISE</div>
        <div>PROJECT</div>
        <img src="./images/heading.png" alt="heading" />
        <div>INVEST</div>
        <div>HOUSING</div>
      </div>
      <button className={classes.enquire}>ENQUIRE</button>
      <div className={classes.body}>
        <div className={classes.left}>
          <img
            src="./images/landingPage.png"
            alt="man"
            onClick={turnPageHandler}
          />
        </div>
        <div className={classes.right}>
          <p className={classes.p1}>JOIN OUR TRIBE</p>
          <p className={classes.p2}>
            Lets join our efforts towards building the unshakable foundation for
            a better tomorrow
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
