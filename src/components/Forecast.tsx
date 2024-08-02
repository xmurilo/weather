import { ForecastListItem } from "../types/types";
import { capitalizeWords } from "../utils/captalizeWords";
import { ForecastContainer } from "./ForecastStyles";

interface ForecastProps {
  forecasts: ForecastListItem[];
}

const Forecast: React.FC<ForecastProps> = ({ forecasts }) => {
  function renderForecasts(): JSX.Element {
    return (
      <ul>
        {forecasts.map(forecast => (
          <li key={forecast.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
            />
            {forecast.main.temp}ºC - {capitalizeWords(forecast.weather[0].description)}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ForecastContainer>
      <h4>Previão para as próximas horas</h4>
      {renderForecasts()}
    </ForecastContainer>
  );
};

export default Forecast;
