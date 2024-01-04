import { Pagination } from '@mui/material';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const MoviesPagination = ({ pageQty, pg, onChange }) => {
  const handlePaginationChange = (_, num) => {
    onChange(num);
  };

  return (
    <Container>
      <Pagination
        count={pageQty}
        page={pg}
        onChange={handlePaginationChange}
        color={'success'}
        sx={{
          color: '#F2EFEE',
          stroke: '#F2EFEE',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',

          '& .MuiPaginationItem-root': {
            color: '#F2EFEE',
          },
          '& .MuiPaginationItem-page': {
            '&:hover:not(.Mui-selected):not(:first-of-type), &:focus:not(.Mui-selected):not(:first-of-type)':
              {
                color: '#8BD538',
              },
          },
        }}
      />
    </Container>
  );
};
