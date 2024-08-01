import { useState } from "react";
import axios from "axios";

// * Components
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

// * StyledComponents
import { Title } from "./AppStyles";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  return (
    <>
      <Title>Condições Climaticas</Title>
      <Search />
      <CurrentWeather />
      <Forecast />
    </>
  );
}

export default App;
