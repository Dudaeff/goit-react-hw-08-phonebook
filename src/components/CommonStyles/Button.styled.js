import styled from 'styled-components';
import { colors, font } from './Variables';

const Button = styled.button`
  background-color: transparent;
  font-size: ${font.sizeMobile};
  padding: 5px 10px;
  color: ${colors.text};
  transition: color 250ms ease-out;

  &:hover,
  :focus {
    color: ${colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: ${font.sizeTab};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.sizeDesk};
  }
`;

export { Button };
