import { Container } from 'components/SharedLayout/SharedLayout.styled';
import {
  SearchForm,
  SearchInput,
  SearchInputLabel,
  SearchBtn,
} from './MoviesSearch.styled';
import { CiSearch } from 'react-icons/ci';

export const MoviesSearch = ({ search }) => {
  const handleSearch = event => {
    event.preventDefault();
    search(event.target.search.value);
    event.currentTarget.reset();
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          id="search-input"
          type="text"
          name="search"
          autoComplete="off"
          required
        />
        <SearchInputLabel htmlFor="input">Search movie</SearchInputLabel>
        <SearchBtn type="submit">
          <CiSearch />
        </SearchBtn>
      </SearchForm>
    </Container>
  );
};
