import * as React from 'react';
import styled from 'styled-components';

import ChapterWrapper from './ChapterWrapper';
import introduction from './motoko/introduction.svg';

import Speech from '../TextComponent/Speech';


const Canvas = styled.div`
  display: flex;
  flex-direction: row;
`;

const Introduction = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <img title="Motoko" src={introduction} alt="Motoko" />
                <Speech target="私は素子です。" kana="わたしはもとこです。" source="I am Motoko." />
            </Canvas>
        </ChapterWrapper>
    );
};

export default Introduction;