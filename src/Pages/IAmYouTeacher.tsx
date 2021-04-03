import * as React from 'react';
import styled from 'styled-components';

import ChapterWrapper from './ChapterWrapper';
import motokoIsTeacher from './motoko/motoko-is-the-teacher.svg';
import satoruSorry from './motoko/satoru-is-sorry.svg';

import Speech from '../TextComponent/Speech';
import SpeechGroup from '../TextComponent/SpeechGroup';


const Canvas = styled.div`
  display: flex;
  flex-direction: row;
`;

const AreYouAStudent = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <SpeechGroup>
                  <Speech target="私はあなたの先生です。" source="I am your teacher." />
                  <Speech target="座って！" source="Sit down!" />
                </SpeechGroup>
                <img title="Motoko" src={motokoIsTeacher} alt="Motoko" />
                <img title="Satoru" src={satoruSorry} alt="Satoru" />
                <Speech target="すみません、もとこ先生。" source="Excuse me, Motoko-Sensei" />
            </Canvas>
        </ChapterWrapper>
    );
};

export default AreYouAStudent;