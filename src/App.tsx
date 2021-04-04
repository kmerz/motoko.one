import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import ColorPalatte from './ColorPalatte';

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

const Info = styled.div`
  color: ${ColorPalatte.info};
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
      </Wrapper>
    </Router>
  );
}

export default App;
