interface SearchProps {
  city: string;
  setCity: (city: string) => void;
  searchWeather: () => Promise<void>;
}

const Search: React.FC<SearchProps> = ({ city, setCity, searchWeather }) => {
  return (
    <div>
      <input value={city} onChange={e => setCity(e.target.value)} type="text" />
      <button onClick={searchWeather}>Buscar</button>
    </div>
  );
};

export default Search;
