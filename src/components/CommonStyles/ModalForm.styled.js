import styled from 'styled-components';
import { colors } from './Variables';
import { FormList } from './FormList.styled';

const ModalForm = styled.form`
  width: 250px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 10px;
  background-color: ${colors.background};
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
  }
`;

const ModalFormList = styled(FormList)`
  margin-top: 0;
`;

export { ModalForm, ModalFormList };
