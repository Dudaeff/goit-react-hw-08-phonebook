import styled from 'styled-components';

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3px;

  @media screen and (min-width: 430px) {
    flex-direction: row;
    column-gap: 10px;
  }

  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
`;

export { NavigationList };
