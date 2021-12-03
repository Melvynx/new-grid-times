import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { COLORS, QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </MiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: minmax(0, auto);

  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0, 1fr);
    gap: 0px;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 24px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;

const SportsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    margin-left: 24px;
  }
`;

const SportsStories = styled.div`
  --min-width: 160px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--min-width), 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    --min-width: 220px;
    overflow: auto;
    grid-auto-flow: column;
    grid-template-columns: revert;
    padding-bottom: 16px;
    /* & > * {
      min-width: var(--min-width);
    } */
  }
`;

const MiniStoryWrapper = styled.div`
  min-width: var(--min-width);
`;

export default SpecialtyStoryGrid;
