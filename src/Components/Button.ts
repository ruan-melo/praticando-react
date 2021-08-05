import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  font-family: Arial;
  font-size: 14px;
  align-items: center;
  margin-top: 30px;
  width: 100px;
  height: 50px;
  background-image: ${({ theme }) => theme.gradients.background.dark};
  border-radius: 4px;
  box-shadow: 1px 4px 10px 0 rgba(0, 0, 0, 0.35),
    -6px -6px 20px 0px rgba(85, 93, 131, 0.66),
    8px 8px 18px 0px rgba(54, 59, 87, 0.2);
  position: relative;
  border: 0;
  // background-clip: padding-box; /* !importanté */
  // border: solid 1px transparent; /* !importanté */
  // border-radius: -10px;

  // &::before {
  //     content: " ";
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     bottom: 0;
  //     left: 0;
  //     z-index: -1;
  //     margin: -1px; /* !importanté */
  //     border-radius: inherit; /* !importanté */
  //     background: linear-gradient(to right bottom, #5f6791, #272c43);
  // }

  & span {
    background-image: ${({ theme }) => theme.gradients.text};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
