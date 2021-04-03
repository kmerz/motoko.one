import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import motokoSeesJohn from './motoko/motoko-sees-john.svg';
import john from './motoko/john-is-enlish-professor.svg';

import Speech from '../TextComponent/Speech';

const AreYouAStudent = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <Speech target="ジョンさん、英語を話せますか？" kana="ジョンさん、えいご お はなせます か？" source="John, do you speak english?" />
                <img title="Motoko" src={motokoSeesJohn} alt="Motoko" />
                <img title="John" src={john} alt="John" />
                <Speech target="はい、私は英語の先生です。" kana="はい、あたし わ えいご の せんせいです。" source="Yes, I am an english teacher." />
            </Canvas>
        </ChapterWrapper>
    );
};

export default AreYouAStudent;