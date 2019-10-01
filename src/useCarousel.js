import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Image from 'Image';
import {
  Container,
  Title,
  InputSection,
  SlideSection,
  ImageContainer,
  ImageWrapper,
  ImageTitle,
  Arrows,
  LeftArrow,
  RightArrow,
  Input,
  Button
} from 'StyledComponents';

import leftArrow from 'assets/left-arrow.svg';
import rightArrow from 'assets/right-arrow.svg';

const INITIAL_INDEX = 0;
const INTERVAL_TIME = 5000;

const UseCarousel = ({ initialImages }) => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState(initialImages);
  const [index, setIndex] = useState(INITIAL_INDEX);

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  }

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
    setIndex(INITIAL_INDEX);
  }, [images, value]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index !== images.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(INITIAL_INDEX);
      }
    }, INTERVAL_TIME);
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
          <ImageTitle>{images[index].title}</ImageTitle>
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
