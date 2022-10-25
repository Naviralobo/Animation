import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Enquire from "./components/Enquire/Enquire";
function App() {
  return (
    <>
      <Route path="/" exact>
        <LandingPage />
      </Route>

      <Route path="/enquire">
        <Enquire />
      </Route>
    </>
  );
}

export default App;
