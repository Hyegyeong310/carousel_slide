import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'Image';

import leftArrow from 'assets/left-arrow.svg';
import rightArrow from 'assets/right-arrow.svg';

const INITIAL_INDEX = 0;

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1;
  font-weight: 500;
  color: #2e293c;
`;
const InputSection = styled.section`
  margin: 2rem;
`;
const SlideSection = styled.section`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  margin-top: 10rem;
  height: 100%;
  position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 3rem;
`;
const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: ${({ index, images }) =>
    `translateX(-${index * (100 / images.length)}%)`};
`;
const Arrows = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  bottom: 0;
  top: 0;
  opacity: 0.6;
  cursor: pointer;
  border-radius: 0.8rem;
  transform: scale(0.7);
  transition: all 0.3s ease-in-out;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
  &:hover {
    opacity: 1;
    transform: scale(1);
  }
  & > img {
    width: 3rem;
  }
`;
const LeftArrow = styled.img``;
const RightArrow = styled.img``;

const Input = styled.input`
  font-weight: 400;
  font-size: 1.2rem;
  color: #909090;
  outline: none;
  padding: 1rem;
  min-width: 20rem;
  border: solid 0.2rem #e5e5e5;
  border-right: none;
`;

const Button = styled.button`
  all: unset;
  color: #fff;
  padding: 1rem 2rem;
  background-color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  border: solid 0.2rem #000;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;

const UseCarousel = ({ initialImages }) => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState(initialImages);
  const [index, setIndex] = useState(INITIAL_INDEX);

  const onChange = useCallback(e => {
    const { value } = e.target;
    setValue(value);
  }, []);

  const prevSlide = useCallback(() => {
    const resetToLastBack = index === 0;
    const currentIndex = resetToLastBack ? images.length - 1 : index - 1;
    setIndex(currentIndex);
  }, [index, images]);

  const nextSlide = useCallback(() => {
    const resetIndex = index === images.length - 1;
    const currentIndex = resetIndex ? 0 : index + 1;
    setIndex(currentIndex);
  }, [index, images]);

  const deleteSlide = useCallback(() => {
    setImages(images.filter(image => image.id !== parseInt(value)));
    setValue('');
    setIndex(0);
  }, [images, value]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index !== images.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(INITIAL_INDEX);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index, images]);

  return (
    <Container>
      <Title>Carousel Slide</Title>
      <SlideSection>
        <Arrows onClick={prevSlide} className="left">
          <LeftArrow src={leftArrow} alt="left arrow" />
        </Arrows>
        <ImageContainer>
          <ImageWrapper index={index} images={images}>
            {images.map((image, idx) => (
              <Image values={image} key={idx} active={index === idx} />
            ))}
          </ImageWrapper>
        </ImageContainer>
        <Arrows onClick={nextSlide} className="right">
          <RightArrow src={rightArrow} alt="right arrow" />
        </Arrows>
      </SlideSection>

      <InputSection>
        <Input value={value} onChange={onChange} placeholder="Enter ID" />
        <Button onClick={deleteSlide}>삭제</Button>
      </InputSection>
    </Container>
  );
};

UseCarousel.propTypes = {
  initialImages: PropTypes.array
};

export default UseCarousel;
