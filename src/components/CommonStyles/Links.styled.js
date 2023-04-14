import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, font } from 'components/CommonStyles/Variables';

const StyledLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${font.sizeMobile};
  font-weight: ${font.weightMedium};

  text-decoration: none;
  color: ${colors.text};
  padding: 2px 10px;
  transition: color 250ms ease-out;

  &:hover,
  :focus {
    color: ${colors.accent};
  }

  &.active {
    color: ${colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: ${font.sizeTab};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.sizeDesk};
  }
`;

export { StyledLink };
