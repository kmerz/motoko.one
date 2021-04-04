import * as React from 'react';

import Canvas from './Canvas';
import ChapterWrapper from './ChapterWrapper';
import theApple from './motoko/the-apple.svg';
import saturorOnKnee from './motoko/saturo-on-the-knee.svg';

import Speech from '../TextComponent/Speech';

const TheSorryApple = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <Speech target="すみません、私はりんごです。" kana="すみません、わたしはりんごです。" source="Excuse me, I am an apple." />
                <img title="Apple" src={theApple} alt="Apple" />
                <img title="Saturo" src={saturorOnKnee} alt="Saturo" />
                <Speech target="はい duolingo 私もすみません" kana="はい duolingo わたしもすみません" source="Yes duolingo, I am sorry, too." />
            </Canvas>
        </ChapterWrapper>
    );
};

export default TheSorryApple;