import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import introduction from './motoko/introduction.svg';

import Speech from '../TextComponent/Speech';

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