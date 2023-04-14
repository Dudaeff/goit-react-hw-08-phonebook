import styled from 'styled-components';
import { colors } from 'components/CommonStyles/Variables';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px ${colors.accent};

  @media screen and (min-width: 768px) {
    height: 60px;
  }

  @media screen and (min-width: 1200px) {
    height: 80px;
  }
`;

export { Header };
