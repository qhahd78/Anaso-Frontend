import React from 'react';
import styled from 'styled-components';
import MyContest from '../../Components/PorfoliDetail/MyContest';
import MyIntro from '../../Components/PorfoliDetail/MyIntro';
import MyPorfolio from '../../Components/PorfoliDetail/MyPorfolio';
import MyStudy from '../../Components/PorfoliDetail/MyStudy';
import Header from '../../Components/common/Header';

const PortfolioDetailDiv = styled.div`
  position: relative;
  /* width: 100vw;
  height: 100vh; */
  /* font-family: 'Spoqa-Light'; */
`;

function PortfolioDetail() {
  return (
    <PortfolioDetailDiv>
      <Header />
      <MyIntro />
    </PortfolioDetailDiv>
  );
}

export default PortfolioDetail;
