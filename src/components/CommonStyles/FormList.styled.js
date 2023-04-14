import styled from 'styled-components';
import { colors, font } from './Variables';
import { Button } from './Button.styled';

const FormList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 15px;
  margin-top: 40px;

  @media screen and (min-width: 290px) {
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 100px;
  }
`;

const FormListLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 5px;

  font-size: ${font.sizeMobile};

  @media screen and (min-width: 290px) {
    width: 220px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${font.sizeTab};
    column-gap: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.sizeDesk};
    column-gap: 15px;
  }
`;

const FormListInput = styled.input`
  padding: 2px 5px;
  max-width: 140px;
  color: ${colors.text};
  border-radius: 4px;
  border: 1px solid ${colors.accent};
  background-color: transparent;
  outline: none;
`;

const FormListButton = styled(Button)`
  margin: 0 auto;
`;

export { FormList, FormListLabel, FormListInput, FormListButton };
