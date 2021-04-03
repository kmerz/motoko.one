import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Welcome from './Pages/Welcome';
import Introduction from './Pages/Introduction';

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

const pages = [
  Welcome,
  Introduction,
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
        <button disabled={isFirst} onClick={() => setCurrentPage(currentPage - 1)} title="Previous Page">前のページ</button>
        <button disabled={isLast} onClick={() => setCurrentPage(currentPage + 1)} title="Next Page">次のページ</button>
      </ButtonBar>
    </Wrapper>
  );
}

export default App;
