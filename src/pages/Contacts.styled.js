import styled from 'styled-components';
import { Button } from 'components/CommonStyles/Button.styled';
import { colors, font } from 'components/CommonStyles/Variables';

const ContactsActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 300px) {
    column-gap: 15px;
  }

  @media screen and (min-width: 480px) {
    column-gap: 25px;
  }
`;

const AddContactBtn = styled(Button)`
  max-width: 150px;
  padding: 2px 5px;
  box-shadow: 0 0 3px ${colors.accent};
  transition: color 250ms ease-out;

  &:hover,
  :focus {
    color: ${colors.accent};
  }

  @media screen and (min-width: 300px) {
    height: 30px;
  }

  @media screen and (min-width: 380px) {
    padding: 5px 10px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 180px;
  }
`;

const ContactsTitle = styled.h2`
  font-size: ${font.titleMobile};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: ${font.titleTab};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.titleDesk};
  }
`;

export { AddContactBtn, ContactsTitle, ContactsActionsWrapper };
