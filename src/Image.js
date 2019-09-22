import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.5;
  transform: scale(0.7);
  transition: opacity 0.3s linear,
    transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  ${({ active }) =>
    active &&
    `
        opacity: 1;
        transform: scale(1);
      `}
`;
const Id = styled.span`
  position: absolute;
  top: -8rem;
  left: -5rem;
  font-size: 10rem;
  font-weight: bold;
  z-index: -1;
  opacity: 0.3;
  @media all and (max-width: 420px) {
    top: -6.5rem;
    left: -4rem;
  }
`;
const Img = styled.img`
  width: 60rem;
  height: 50rem;
  box-shadow: 0 1.5rem 2.5rem rgba(50, 50, 93, 0.2),
    0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  @media all and (max-width: 768px) {
    width: 40rem;
    height: 30rem;
  }
  @media all and (max-width: 420px) {
    width: 30rem;
    height: 20rem;
  }
`;
const Title = styled.h3`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  font-size: 2rem;
  color: #fff;
  border-bottom: 0.2rem solid #fff;
  padding: 1rem;
`;

const Image = ({ values, active }) => {
  const { id, imageUrl, title } = values;
  return (
    <Container className={`img-${id}`} active={active}>
      <Id>{id < 10 ? `0${id}` : id}</Id>
      <Img src={imageUrl} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

Image.propTypes = {
  values: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string
  }).isRequired
};

export default Image;
