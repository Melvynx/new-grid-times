import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  const test = 5;
  return (
    <Wrapper
      style={{
        '--col-1': test + 'fr',
        '--col-2': test + 1 + 'fr',
        '--col-3': test + 2 + 'fr',
      }}
    >
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <SecondaryStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </SecondaryStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --divider-width: 1px;
  --divider-color: ${COLORS.gray[300]};
  --divider-padding: 16px;

  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 0px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 42px 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: var(--col-3) var(--col-2) var(--col-1);
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0;
  }
  /* background-color: var(--divider-color);

  & > * {
    background-color: ${COLORS.gray[100]};
  } */
`;
const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 36px;
    & > * {
      flex: 1;
    }
  }
`;

const SecondaryStoryWrapper = styled.div`
  &:not(:last-of-type) {
    padding-bottom: var(--divider-padding);
    margin-bottom: var(--divider-padding);
    border-bottom: var(--divider-width) solid var(--divider-color);
  }

  ${OpinionStoryList} > & {
    @media ${QUERIES.tabletOnly} {
      padding-bottom: unset;
      margin-bottom: unset;
      border-bottom: unset;
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  align-self: start;

  @media ${QUERIES.tabletAndUp} {
    padding-left: var(--divider-padding);
    margin-left: var(--divider-padding);
    border-left: var(--divider-width) solid var(--divider-color);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    border-left: var(--divider-width) solid var(--divider-color);
    padding-left: var(--divider-padding);
    margin-left: var(--divider-padding);
    margin-top: -10px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: var(--divider-width) solid var(--divider-color);
    padding-top: var(--divider-padding);
    margin-top: var(--divider-padding);
    margin-left: calc(var(--divider-padding) * 2);
  }
`;

export default MainStoryGrid;
