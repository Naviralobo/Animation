import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import SliderImage from "./components/SliderImage/SliderImage";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.container}>
      <Route path="/" exact>
        <LandingPage />
      </Route>

      <Route path="/sliderImage">
        <SliderImage />
      </Route>
    </div>
  );
}

export default App;
