import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 60px;
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 12px;
  border-radius: 22px;
  border: 2px solid #f2efee;
  color: #f2efee;
  background-color: transparent;

  &:focus {
    outline: none;
  }
  &:focus + label {
    top: -40%;
    color: #8bd538;
  }

  @media screen and (min-width: 428px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const SearchInputLabel = styled.label`
  text-align: center;
  position: absolute;
  top: 25%;
  left: 5%;
  color: #f2efee;
  width: 105px;
  transition: all 200ms linear;
`;
export const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #8bd538;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 350ms linear;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (min-width: 428px) {
    width: 50px;
    height: 50px;
  }
`;
