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

const INITIAL_INDEX = 1;
const INTERVAL_TIME = 5000;

const UseCarousel = ({ initialImages }) => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([
    initialImages[initialImages.length - 1],
    ...initialImages,
    initialImages[0]
  ]);
  const [index, setIndex] = useState(INITIAL_INDEX);
  const [imagesLength, setImagesLength] = useState(images.length);

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const prevSlide = useCallback(() => {
    if (index > INITIAL_INDEX) {
      setIndex(index - 1);
    } else if (index === INITIAL_INDEX) {
      setIndex(imagesLength - 2);
    }
  }, [index, imagesLength]);

  const nextSlide = useCallback(() => {
    if (index < imagesLength - 1) {
      setIndex(index + 1);
    }
    if (index === imagesLength - 2) {
      setIndex(1);
    }
  }, [index, imagesLength]);

  const deleteSlide = useCallback(() => {
    const newImages = images.filter(image => image.id !== parseInt(value));
    setImages(newImages);
    setValue('');
    setIndex(INITIAL_INDEX);
    setImagesLength(newImages.length);
  }, [images, value]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, [nextSlide]);

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
              <Image
                values={image}
                key={idx}
                active={index === idx}
                imagesLength={imagesLength}
              />
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
