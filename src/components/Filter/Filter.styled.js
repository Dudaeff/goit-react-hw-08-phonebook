import styled from 'styled-components';
import { FormListInput } from 'components/CommonStyles/FormList.styled';
import { colors, font } from 'components/CommonStyles/Variables';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const FilterLabel = styled.label`
  font-size: ${font.sizeMobile};
  max-width: 180px;

  @media screen and (min-width: 768px) {
    font-size: ${font.sizeTab};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.sizeDesk};
  }
`;

const FilterInput = styled(FormListInput)`
  margin-left: 0;
  border: 0;
  border-bottom: 1px solid ${colors.accent};
  border-radius: 0;
`;

export { FilterWrapper, FilterLabel, FilterInput };
