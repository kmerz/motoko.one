import * as React from 'react';
import styled from 'styled-components';

import ColorPalatte from '../ColorPalatte';

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: 2px solid ${ColorPalatte.font};
  border-radius: 5px;
  padding: 10px;
  height: 274px;
`;

type Props = {
    children: React.ReactElement,
}

const ChapterWrapper = ({ children }: Props) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default ChapterWrapper;