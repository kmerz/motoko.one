import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
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