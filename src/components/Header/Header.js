import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, WEIGHTS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopAction>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopAction>
        <Logo />
        <SubscribeContainer>
          <Button>Subscribe</Button>
          <SubscribeText>Already a subscriber?</SubscribeText>
        </SubscribeContainer>
      </MainHeader>
    </header>
  );
};

const SubscribeContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const SubscribeText = styled.a`
  font-weight: ${WEIGHTS['400']};
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
`;

const DesktopAction = styled.div`
  display: none;
  gap: 24px;

  /*
  FIX: Remove the inline spacing that comes with
  react-feather icons.
*/
  svg {
    display: block;
  }

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
  }
`;

export default Header;
