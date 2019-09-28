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
  top: -80px;
  left: -50px;
  font-size: 100px;
  font-weight: bold;
  z-index: -1;
  opacity: 0.3;
  @media all and (max-width: 420px) {
    top: -65px;
    left: -40px;
  }
`;
const Img = styled.img`
  width: 500px;
  height: auto;
  box-shadow: 0 15px 25px rgba(50, 50, 93, 0.2),
    0 5px 15px rgba(0, 0, 0, 0.2);
  @media all and (max-width: 768px) {
    width: 400px;
  }
  @media all and (max-width: 420px) {
    width: 300px;
  }
`;

const Image = ({ values, active }) => {
  const { id, imageUrl, title } = values;
  return (
    <>
      <Container className={`img-${id}`} active={active}>
        <Id>{id < 10 ? `0${id}` : id}</Id>
        <Img src={imageUrl} alt={title} />
      </Container>
    </>
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
