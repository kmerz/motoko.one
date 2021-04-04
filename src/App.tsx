import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

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

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  background-color: ${ColorPalette.info};
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid white;
  cursor: pointer;

  :hover {
    background-color: ${ColorPalette.primary};
  }

  :disabled {
    background-color: ${ColorPalette.Background};
  }
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
  const [currentPage, setCurrentPage] = useState(0);

  const Chapter = pages[currentPage];
  const isFirst = currentPage === 0;
  const isLast = currentPage === pages.length -1;

  return (
    <Wrapper>
      <Chapter />
      <ButtonBar>
        <Button disabled={isFirst} onClick={() => setCurrentPage(0)} title="First Page">先頭ページ</Button>
        <Button disabled={isFirst} onClick={() => setCurrentPage(currentPage - 1)} title="Previous Page">前のページ</Button>
        <Button disabled={isLast} onClick={() => setCurrentPage(currentPage + 1)} title="Next Page">次のページ</Button>
        <Button disabled={isLast} onClick={() => setCurrentPage(pages.length - 1)} title="Last Page">最後のページ</Button>
      </ButtonBar>
    </Wrapper>
  );
}

export default App;
