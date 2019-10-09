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

const INITIAL_INDEX = 2;
const INTERVAL_TIME = 5000;
const SLIDE_SPEED = 300;

const UseCarousel = ({ initialImages }) => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([
    ...initialImages.slice(initialImages.length - 2),
    ...initialImages,
    ...initialImages.slice(0, 2)
  ]);
  const [index, setIndex] = useState(INITIAL_INDEX);
  const [imagesLength, setImagesLength] = useState(images.length);
  const [transition, setTransition] = useState(SLIDE_SPEED);
  const [isStart, setIsStart] = useState(false);
  const LAST_SLIDE_COPY = 1;
  const FIRST_SLIDE_COPY = imagesLength - 2;

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const moveSlide = useCallback(
    isNext => {
      if (!isStart) {
        if (isNext) {
          if (index <= FIRST_SLIDE_COPY) {
            setIndex(index + 1);
            setTransition(SLIDE_SPEED);
          }
          if (index === FIRST_SLIDE_COPY - 1) {
            setIndex(FIRST_SLIDE_COPY);
          }
        } else {
          if (index >= INITIAL_INDEX) {
            setIndex(index - 1);
            setTransition(SLIDE_SPEED);
          } else if (index === INITIAL_INDEX) {
            setIndex(LAST_SLIDE_COPY);
          }
        }
        setIsStart(true);
      }
    },
    [isStart, index, FIRST_SLIDE_COPY]
  );

  const deleteSlide = useCallback(() => {
    const parseValue = parseInt(value);
    let newImages = images.filter(image => image.id !== parseValue);
    if (
      images[INITIAL_INDEX].id === parseValue ||
      images[INITIAL_INDEX + 1].id === parseValue
    ) {
      newImages = [...newImages, newImages[INITIAL_INDEX + 1]];
    } else if (
      images[LAST_SLIDE_COPY].id === parseValue ||
      images[LAST_SLIDE_COPY - 1].id === parseValue
    ) {
      newImages = [newImages[INITIAL_INDEX + 1], ...newImages];
    }
    console.log('newImages: ', newImages);
    setImages(newImages);
    setValue('');
    setIndex(INITIAL_INDEX);
    setImagesLength(newImages.length);
  }, [images, value]);

  const handleTransitionEnd = index => {
    setTransition(0);
    setIndex(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(true);
    }, INTERVAL_TIME);
    return () => {
      return clearInterval(interval);
    };
  }, [moveSlide]);

  return (
    <Container>
      <Title>Carousel Slide</Title>
      <SlideSection>
        <Arrows onClick={() => moveSlide(false)} className="left">
          <LeftArrow src={leftArrow} alt="left arrow" />
        </Arrows>
        <ImageContainer>
          <ImageWrapper
            index={index}
            images={images}
            transition={transition}
            onTransitionEnd={() => {
              index === FIRST_SLIDE_COPY
                ? handleTransitionEnd(INITIAL_INDEX)
                : index === LAST_SLIDE_COPY &&
                  handleTransitionEnd(FIRST_SLIDE_COPY - 1);
              setIsStart(false);
            }}
          >
            {images.map((image, idx) => (
              <Image values={image} key={idx} active={index === idx} />
            ))}
          </ImageWrapper>
          <ImageTitle>{images[index].title}</ImageTitle>
        </ImageContainer>
        <Arrows onClick={() => moveSlide(true)} className="right">
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
