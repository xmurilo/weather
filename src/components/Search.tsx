import { SearchButton, SearchCity, SearchContainer } from "./SearchStyles";

interface SearchProps {
  city: string;
  setCity: (city: string) => void;
  searchWeather: () => Promise<void>;
}

const Search: React.FC<SearchProps> = ({ city, setCity, searchWeather }) => {
  return (
    <SearchContainer>
      <SearchCity value={city} onChange={e => setCity(e.target.value)} type="text" />
      <SearchButton onClick={searchWeather}>Buscar</SearchButton>
    </SearchContainer>
  );
};

export default Search;
