import styled from 'styled-components';
import { colors, font } from 'components/CommonStyles/Variables';

const UserEmailText = styled.p`
  font-size: ${font.sizeMobile};
  padding: 2px;
  box-shadow: 0 0 5px ${colors.accent};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${font.sizeTab};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.sizeDesk};
  }
`;

export { UserEmailText };
