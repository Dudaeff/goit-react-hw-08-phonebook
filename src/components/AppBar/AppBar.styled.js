import styled from 'styled-components';
import { colors } from 'components/CommonStyles/Variables';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 0 1px blue, 0px 2px 0 blue, 0px 3px 0 ${colors.accent},
    0px 4px 0 ${colors.accent};

  @media screen and (min-width: 768px) {
    height: 60px;
  }

  @media screen and (min-width: 1200px) {
    height: 80px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 290px) {
    width: 380px;
  }

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 738px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export { Header, HeaderWrapper };
