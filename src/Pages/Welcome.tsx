import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import welcome from './motoko/welcome.svg';

import Speech from '../TextComponent/Speech';

const Welcome = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <img src={welcome} alt="Motoko" />
                <Speech target="こんにちは" source="Hello" />
            </Canvas>
        </ChapterWrapper>
    );
};

export default Welcome;