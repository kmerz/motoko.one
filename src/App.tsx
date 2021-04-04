import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import ColorPalette from './ColorPalatte';

import Welcome from './Pages/Welcome';
import Introduction from './Pages/Introduction';
import SatoruIntroduction from './Pages/SatoruIntroduction';
import AreYouAStudent from './Pages/AreYouAStudent';
import IAmYourTeacher from './Pages/IAmYouTeacher';
import FirstLesson from './Pages/FirstLesson';
import MotokoAndJohn from './Pages/MotokoAndJohn';
import TheSorryApple from './Pages/TheSorryApple';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled.a`
  background-color: ${ColorPalette.Background};
  border: none;
  color: white;
  padding: 5px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid white;
  cursor: pointer;
`;

const Info = styled.div`
  color: ${ColorPalette.info};
`;

const pages = [
  Welcome,
  Introduction,
  SatoruIntroduction,
  AreYouAStudent,
  IAmYourTeacher,
  FirstLesson,
  MotokoAndJohn,
  TheSorryApple,
];

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          {pages.map((Component, index) => (
            <Route key={Component.toString()} path={`/page/${index + 1}`}>
              <Component />
            </Route>
          ))}
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
        <Info>Click on the speech bubble for translation and kana.</Info>
        <Navigation pageCount={pages.length} />
        <LinkWrapper>
          <StyledLink href="https://github.com/kmerz/motoko.one">Github</StyledLink>
          <StyledLink href="https://twitter.com/motoko_one">Twitter</StyledLink>
        </LinkWrapper>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style={{ borderWidth:0 }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><br />
        Creative Commons Attribution 4.0 International License</a>
      </Wrapper>
    </Router>
  );
}

export default App;
