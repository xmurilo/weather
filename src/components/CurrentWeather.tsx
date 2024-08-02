import { WeatherData } from "../types/types";
import { capitalizeWords } from "../utils/captalizeWords";
import { InfoWeather } from "./CurrentWeatherStyles";

interface CurrentWeatherProps {
  weather: WeatherData;
}
const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {
  if (!weather.main) return null;

  return (
    <InfoWeather>
      <h3>{weather.name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />

      <p>{weather.main.temp}ºC</p>
      <p>{capitalizeWords(weather.weather[0].description)}</p>
    </InfoWeather>
  );
};

export default CurrentWeather;
