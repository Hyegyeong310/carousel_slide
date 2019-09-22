import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media all and (max-width: 420px) {
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1;
  font-weight: 500;
  color: #2e293c;
  @media all and (max-width: 420px) {
    padding: 1rem;
  }
`;

export const InputSection = styled.section`
  margin: 2rem;
`;
export const SlideSection = styled.section`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  margin-top: 10rem;
  height: 60rem;
  position: relative;
  @media all and (max-width: 768px) {
    height: 40rem;
  }
  @media all and (max-width: 420px) {
    height: 30rem;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 3rem;
  @media all and (max-width: 768px) {
    max-width: 40rem;
  }
  @media all and (max-width: 420px) {
    max-width: 30rem;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: ${({ index, images }) =>
    `translateX(-${index * (100 / images.length)}%)`};
`;

export const Arrows = styled.div`
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
  @media all and (max-width: 420px) {
    width: 5rem;
  }
`;
export const LeftArrow = styled.img``;
export const RightArrow = styled.img``;

export const Input = styled.input`
  font-weight: 400;
  font-size: 1.2rem;
  color: #909090;
  outline: none;
  padding: 1rem;
  min-width: 20rem;
  border: solid 0.2rem #e5e5e5;
  border-right: none;
`;

export const Button = styled.button`
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
