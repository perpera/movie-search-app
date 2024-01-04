import { Container } from 'components/SharedLayout/SharedLayout.styled';
import {
  SearchForm,
  SearchInput,
  SearchInputLabel,
  SearchBtn,
} from './MoviesSearch.styled';
import { CiSearch } from 'react-icons/ci';

const MoviesSearch = ({ search }) => {
  const handleSearch = event => {
    event.preventDefault();
    search(event.target.search.value);
    event.currentTarget.reset();
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <div style={{ position: 'relative' }}>
          <SearchInput
            id="search-input"
            type="text"
            name="search"
            autoComplete="off"
            required
          />
          <SearchInputLabel htmlFor="search-input">
            Search movie
          </SearchInputLabel>
        </div>
        <SearchBtn type="submit">
          <CiSearch fill="#F2EFEE" size={25} />
        </SearchBtn>
      </SearchForm>
    </Container>
  );
};

export default MoviesSearch;
