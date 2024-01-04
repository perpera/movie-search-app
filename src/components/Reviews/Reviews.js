import {
  ReviewsAuthor,
  ReviewsItem,
  ReviewsList,
  ReviewsWrap,
  NoReviews,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'movies-api';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { smoothScroll } from 'tools/SmoothScroll';
import { notification } from 'tools/notification';
import { CiUser } from 'react-icons/ci';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);

    const fetchReviews = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
        return results;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
        smoothScroll('reviewsWrap');
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsWrap id="reviewsWrap">
      <Container>
        {loader && <Loader />}
        {reviews.length > 0 ? (
          <ReviewsList>
            {reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <ReviewsAuthor>
                  <CiUser />
                  {author}
                </ReviewsAuthor>
                <p>{content}</p>
              </ReviewsItem>
            ))}
          </ReviewsList>
        ) : (
          <NoReviews>Sorry, there are no reviews yet.</NoReviews>
        )}
      </Container>
    </ReviewsWrap>
  );
};
