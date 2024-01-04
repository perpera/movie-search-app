import styled from 'styled-components';

export const ReviewsWrap = styled.div`
  padding: 44px 0;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: #f2efee;
`;

export const ReviewsItem = styled.li`
  width: 100%;
  padding: 12px;
  border: 1px solid #f2efee;
  border-radius: 22px;
`;

export const ReviewsAuthor = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
`;

export const NoReviews = styled.div`
  font-size: 20px;
  color: #f2efee;
`;
