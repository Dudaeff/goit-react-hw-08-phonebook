import styled from 'styled-components';
import { Button } from 'components/CommonStyles/Button.styled';
import { colors, font } from 'components/CommonStyles/Variables';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const ContactsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.accent};

  @media screen and (min-width: 430px) {
    width: 360px;
    margin: 0 auto;
  }

  @media screen and (min-width: 480px) {
    flex-direction: column;
    row-gap: 5px;

    width: 200px;
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

const ContactsInfo = styled.p`
  font-size: ${font.sizeMobile};

  @media screen and (min-width: 768px) {
    font-size: ${font.sizeTab};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.sizeDesk};
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  column-gap: 5px;

  @media screen and (min-width: 480px) {
    justify-content: center;
    column-gap: 10px;
  }
`;

const ContactsUpdateBtn = styled(Button)`
  width: 50px;
  color: green;

  &:hover,
  :focus {
    color: ${colors.text};
  }

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1200px) {
    width: 100px;
  }
`;

const ContactsDeleteBtn = styled(Button)`
  width: 50px;
  color: red;

  &:hover,
  :focus {
    color: ${colors.text};
  }

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1200px) {
    width: 100px;
  }
`;

export {
  ContactsList,
  ContactsListItem,
  ContactWrapper,
  ContactsUpdateBtn,
  ContactsDeleteBtn,
  ContactsInfo,
};
