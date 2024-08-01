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
  const [state, setState] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  async function getCoordinates(city: string) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`,
      );
      const data = response.data;
      const { lat, lon, state, name } = data[0];
      return {
        lat,
        lon,
        state,
        name,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async function searchWeather() {
    const data = await getCoordinates(city);
    if (!data) return;
    const { name, state, lat, lon } = data;
    setCity(name);
    setState(state);

    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      );
      const weather = response.data;
      setWeather(weather);
      console.log(weather);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  return (
    <>
      <Title>Condições Climaticas</Title>
      <h3></h3>
      <Search city={city} setCity={setCity} searchWeather={searchWeather} />
      <CurrentWeather />
      <Forecast />
    </>
  );
}

export default App;
