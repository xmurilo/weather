// * Libraries
import { useState } from "react";
import axios from "axios";

// * Components
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

// * StyledComponents
import { Title } from "./AppStyles";

// * Types
import { WeatherData } from "./types/types";
const initialWeatherData: WeatherData = {} as WeatherData;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData>(initialWeatherData);
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
    const { name, lat, lon } = data;
    setCity(name);

    try {
      const responseWeather = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      );
      const responseForecast = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      );
      const weatherData = responseWeather.data;
      const forecastData = responseForecast.data;
      console.log(forecastData);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  return (
    <>
      <Title>Condições Climáticas</Title>
      <Search city={city} setCity={setCity} searchWeather={searchWeather} />
      <CurrentWeather weather={weather} />
      {forecast.length > 0 && <Forecast forecasts={forecast} />}
    </>
  );
}

export default App;
