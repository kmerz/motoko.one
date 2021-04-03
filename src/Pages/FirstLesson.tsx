import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import motokoIsTeacher from './motoko/teaching.svg';
import satoruResponding from './motoko/satoru-bench.svg';

import Speech from '../TextComponent/Speech';
import SpeechGroup from '../TextComponent/SpeechGroup';


const AreYouAStudent = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <SpeechGroup>
                  <Speech target="私はあなたの先生です。" kana="わたしはあなたのせんせいです。" source="I am your teacher." />
                  <Speech target="座って！" source="Sit down!" kana="すわって!" />
                </SpeechGroup>
                <img title="Motoko" src={motokoIsTeacher} alt="Motoko" />
                <img title="Satoru" src={satoruResponding} alt="Satoru" />
                <Speech target="すみません、素子先生。" kana="もとこせんせい" source="Excuse me, Motoko-Sensei" />
            </Canvas>
        </ChapterWrapper>
    );
};

export default AreYouAStudent;