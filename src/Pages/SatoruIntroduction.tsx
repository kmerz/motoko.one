import * as React from 'react';
import styled from 'styled-components';

import ChapterWrapper from './ChapterWrapper';
import satoruIntroduction from './motoko/satoru-introduction.svg';

import Speech from '../TextComponent/Speech';
import SpeechGroup from '../TextComponent/SpeechGroup';


const Canvas = styled.div`
  display: flex;
  flex-direction: row;
`;

const SatoruIntroduction = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <img title="Motoko" src={satoruIntroduction} alt="Motoko" />
                <SpeechGroup>
                  <Speech target="こんにちは" source="Hello" />
                  <Speech target="そして、私はサトルです。" source="And I am Satoru." />
                </SpeechGroup>
            </Canvas>
        </ChapterWrapper>
    );
};

export default SatoruIntroduction;