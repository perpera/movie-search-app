import {
  CastCharacter,
  CastImg,
  CastItem,
  CastList,
  CastName,
  CastWrapper,
  NoCast,
} from './Cast.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'movies-api';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { notification } from 'tools/notification';
import actorImg from '../../img/def_avatar.png';
import { smoothScroll } from 'tools/SmoothScroll';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const fetchCast = async () => {
      try {
        const castData = await getCast(movieId);
        setCast(castData.cast);
        return castData;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
        smoothScroll('castList');
      }
    };
    fetchCast();
  }, [movieId]);

  const showDefImg = (actorSrc, defImg) => {
    const actorUrl = `https://image.tmdb.org/t/p/w500${actorSrc}`;
    return actorSrc ? actorUrl : defImg;
  };

  return (
    <CastWrapper id={'castList'}>
      <Container>
        {loader && <Loader />}
        {cast.length > 0 ? (
          <CastList>
            {cast.map(({ id, name, character, profile_path }) => (
              <CastItem key={id}>
                <CastImg $actor={showDefImg(profile_path, actorImg)} />
                <CastName>{name}</CastName>
                <CastCharacter>{character}</CastCharacter>
              </CastItem>
            ))}
          </CastList>
        ) : (
          <NoCast></NoCast>
        )}
      </Container>
    </CastWrapper>
  );
};

export default Cast;
