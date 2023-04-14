import { font } from 'components/CommonStyles/Variables';
import styled from 'styled-components';

const Hero = styled.div`
  max-width: 280px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 480px) {
    max-width: 380px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${font.titleTab};
    max-width: 580px;
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.titleDesk};
    max-width: 1080px;
  }
`;

const HeroTitle = styled.h1`
  font-size: ${font.titleMobile};
  margin-top: 40px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: ${font.titleTab};
    margin-top: 80px;
  }

  @media screen and (min-width: 1200px) {
    font-size: ${font.titleDesk};
    margin-top: 150px;
  }
`;

export { Hero, HeroTitle };
