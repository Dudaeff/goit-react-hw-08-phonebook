import styled from 'styled-components';
import { colors, font } from 'components/CommonStyles/Variables';

const UserEmailText = styled.p`
  font-size: ${font.sizeMobile};
  padding: 2px;
  border-bottom: 1px solid ${colors.accent};
  border-radius: 0;

  @media screen and (min-width: 768px) {
    font-size: ${font.sizeTab};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.sizeDesk};
  }
`;

export { UserEmailText };
