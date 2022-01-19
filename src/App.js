import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country/:alpha2Code" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
