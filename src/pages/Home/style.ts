import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  & .clock {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    width: 230px;
    border-radius: 50%;
    box-shadow: 12px 12px 32px 0px ${({ theme }) => theme.primary.dark};
    background: ${({ theme }) => theme.primary.main};
  }

  & .clock-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 12px 12px 32px 0px ${({ theme }) => theme.primary.dark};
  }

  & .clock-point {
    position: relative;
    height: 10px;
    width: 10px;

    border-radius: 50%;
    background: radial-gradient(#969dc6, #c7cbe7);

    &::before {
      content: " ";
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform-origin: top left;
      transform: rotate(-130deg) translate(-2.5px, -20px);
      width: 5px;
      height: 100px;
      border-radius: 5px;
      background: radial-gradient(circle at center, #855cff, #612ff5);
      box-shadow: inset 0.5px 0.5px 0.5px rgba(15, 18, 37, 0.15),
        0px 3px 2px 1px rgba(149, 114, 252, 0.3);
    }

    &::after {
      content: " ";
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform-origin: top left;
      transform: rotate(150deg) translate(-2.5px, -20px);
      width: 5px;
      height: 80px;
      border-radius: 5px;
      background: radial-gradient(circle at center, #855cff, #612ff5);
      box-shadow: inset 0.5px 0.5px 0.5px rgba(15, 18, 37, 0.15),
        0px 3px 2px 1px rgba(149, 114, 252, 0.3);
    }
  }

  & h3 {
    display: block;
    font-weight: bold;
    margin-top: 30px;
    background-image: ${({ theme }) => theme.gradients.text};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
