import { StyledLoader } from './Loader.styled';
import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <StyledLoader>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#00908F', '#0A3E94', '#488026', '#918224', '#8A1D21']}
      />
    </StyledLoader>
  );
};
