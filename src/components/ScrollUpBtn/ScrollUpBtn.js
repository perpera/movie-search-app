import { useState, useEffect } from 'react';
import { ScrollUpButton } from './ScrollUp.styled';
import { CiCircleChevUp } from 'react-icons/ci';

export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollUpButton
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <CiCircleChevUp size={33} fill="#F2EFEE" />
    </ScrollUpButton>
  );
};
