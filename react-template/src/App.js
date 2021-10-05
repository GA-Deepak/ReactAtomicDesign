// import logo from './logo.svg';
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Pages/Homes";
import AboutUs from "./Pages/AboutUs";
import Servicesonpage from "./Pages/Servicesonpage";
import Single from "./Pages/Single";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/servicesonpage" component={Servicesonpage} />
        <Route path="/single" component={Single} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contactUs" component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
