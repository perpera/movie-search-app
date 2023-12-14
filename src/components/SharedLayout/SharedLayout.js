import { Header, Container, Nav, StyledNavLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledNavLink to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
          </Nav>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
