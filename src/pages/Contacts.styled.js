import styled from 'styled-components';
import { Button } from 'components/CommonStyles/Button.styled';
import { colors, font } from 'components/CommonStyles/Variables';

const ContactsActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 20px;
`;

const AddContactBtn = styled(Button)`
  max-width: 150px;
  padding: 5px 10px;
  box-shadow: 0 0 3px ${colors.accent};
  transition: color 250ms ease-out;

  &:hover,
  :focus {
    color: ${colors.accent};
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
