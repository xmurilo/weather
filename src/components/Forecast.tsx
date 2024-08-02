import { ForecastListItem } from "../types/types";

interface ForecastProps {
  forecasts: ForecastListItem[];
}

const Forecast: React.FC<ForecastProps> = ({ forecasts }) => {
  console.log(forecasts);

  return (
    <div>
      <h4>Previão para as próximas horas</h4>
      <ul>
        {forecasts.map(forecast => (
          <li key={forecast.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
            />
            {forecast.main.temp}ºC - {forecast.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
