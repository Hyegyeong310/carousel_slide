import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @media (min-width: 1281px) {
    max-width: 1281px;
  }
  @media all and (min-width: 481px) and (max-width: 767px) {
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1;
  font-weight: 500;
  color: #2e293c;
  @media all and (min-width: 481px) and (max-width: 767px) {
    padding: 10px;
  }
`;

export const InputSection = styled.section`
  margin: 20px;
`;
export const SlideSection = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 50px;
  height: 500px;
  position: relative;
  @media all and (min-width: 768px) and (max-width: 1024px) {
    height: 400px;
  }
  @media all and (min-width: 481px) and (max-width: 767px) {
    height: 300px;
  }
  @media all and (min-width: 320px) and (max-width: 480px) {
    height: 260px;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 90%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 30px;
  @media all and (min-width: 768px) and (max-width: 1024px) {
    max-width: 400px;
  }
  @media all and (min-width: 481px) and (max-width: 767px) {
    max-width: 300px;
  }
  @media all and (min-width: 320px) and (max-width: 480px) {
    max-width: 230px;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: ${({ transition }) =>
    `transform ${transition}ms cubic-bezier(0.455, 0.03, 0.515, 0.955)`};
  transform: ${({ index, images }) => {
    return `translateX(-${index * (100 / images.length)}%)`;
  }};
`;

export const ImageTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-weight: 400;
  position: absolute;
  bottom: 10px;
  padding: 10px;
  z-index: 10;
  letter-spacing: 8px;
`;

export const Arrows = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  bottom: 0;
  top: 0;
  opacity: 0.6;
  cursor: pointer;
  border-radius: 8px;
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
    width: 30px;
  }
  @media all and (min-width: 481px) and (max-width: 767px) {
    width: 50px;
  }
  @media all and (min-width: 320px) and (max-width: 480px) {
    width: 10px;
  }
`;
export const LeftArrow = styled.img``;
export const RightArrow = styled.img``;

export const Input = styled.input`
  font-weight: 400;
  font-size: 12px;
  color: #909090;
  outline: none;
  padding: 10px;
  min-width: 200px;
  border: solid 2px #e5e5e5;
  border-right: none;
  @media all and (min-width: 320px) and (max-width: 480px) {
    min-width: 150px;
  }
`;

export const Button = styled.button`
  all: unset;
  color: #fff;
  padding: 10px 20px;
  background-color: #000;
  font-size: 12px;
  cursor: pointer;
  border: solid 2px #000;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;
