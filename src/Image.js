import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.5;
  transform: scale(0.7);
  /* transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955); */
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
  @media all and (min-width: 481px) and (max-width: 767px) {
    top: -65px;
    left: -40px;
  }
  @media all and (min-width: 320px) and (max-width: 480px) {
    font-size: 70px;
    top: -60px;
  }
`;
const Item = styled.img`
  width: 500px;
  height: auto;
  box-shadow: 0 15px 25px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.2);
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
  }
  @media all and (min-width: 481px) and (max-width: 767px) {
    width: 300px;
  }
  @media all and (min-width: 320px) and (max-width: 480px) {
    width: 230px;
  }
`;

const Image = ({ values, active }) => {
  const { id, imageUrl, title } = values;

  return (
    <>
      <Container active={active} id={id}>
        <Id>{id < 10 ? `0${id}` : id}</Id>
        <Item src={imageUrl} alt={title} />
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
