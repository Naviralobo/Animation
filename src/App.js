import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Enquire from "./components/Enquire/Enquire";
function App() {
  return (
    <>
      <LandingPage />
      <Route path="./enquire">
        <Enquire />
      </Route>
    </>
  );
}

export default App;
