import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { GoBackLink } from './GoBackBtn.styled';
import { CiCircleChevLeft } from 'react-icons/ci';

export const GoBackBtn = ({ path }) => {
  return (
    <Container>
      <GoBackLink to={path}>
        <CiCircleChevLeft />
        Go back
      </GoBackLink>
    </Container>
  );
};
