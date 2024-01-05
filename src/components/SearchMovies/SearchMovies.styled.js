import { styled } from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 60px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;

  & :is(input:focus, input:valid) ~ label {
    color: #488026;
    transform: translateY(-20px);
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 20px;
  color: #f2efee;
  border: 2px solid #f2efee;
  background-color: transparent;

  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px black inset;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 428px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const SearchInputLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 5%;
  background-color: black;
  color: grey;
  width: 105px;
  text-align: center;
  transition: all 200ms linear;
  cursor: text;
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #488026;
  cursor: pointer;
  transition: opacity 350ms linear;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 428px) {
    width: 50px;
    height: 50px;
  }
`;
