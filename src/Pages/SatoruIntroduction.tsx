import * as React from 'react';

import Canvas from './Canvas';
import ChapterWrapper from './ChapterWrapper';
import satoruIntroduction from './motoko/satoru-introduction.svg';

import Speech from '../TextComponent/Speech';
import SpeechGroup from '../TextComponent/SpeechGroup';

const SatoruIntroduction = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <img title="Motoko" src={satoruIntroduction} alt="Motoko" />
                <SpeechGroup>
                  <Speech target="こんにちは" source="Hello" />
                  <Speech target="そして、私はサトルです。" kana="そして、わたしはサトルです。" source="And I am Satoru." />
                </SpeechGroup>
            </Canvas>
        </ChapterWrapper>
    );
};

export default SatoruIntroduction;