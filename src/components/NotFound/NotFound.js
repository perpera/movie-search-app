import { CiFaceFrown } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import { NotFoundWrapper, NotFoundText, GoToMainPage } from './NotFound.styled';

export const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <NotFoundWrapper>
      <NotFoundText>
        Such page {pathname} doesn't exist!
        <CiFaceFrown size={60} />
      </NotFoundText>
      <GoToMainPage to={'/'}>Go back to the Main Page</GoToMainPage>
    </NotFoundWrapper>
  );
};
