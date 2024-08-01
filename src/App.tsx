import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { Title } from "./AppStyles";

function App() {
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
