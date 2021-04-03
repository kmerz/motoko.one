import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import motokoAsking from './motoko/motoko-is-asking-satoru.svg';
import satoruAnswer from './motoko/satoru-is-a-japanese-student.svg';

import Speech from '../TextComponent/Speech';

const AreYouAStudent = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <Speech target="学生ですか。" kana="がくせいですか。" source="Are you a student?" />
                <img title="Motoko" src={motokoAsking} alt="Motoko" />
                <img title="Satoru" src={satoruAnswer} alt="Satoru" />
                <Speech target="はい、学生です。" kana="はい、がくせいです。" source="Yes, I am a student." />
            </Canvas>
        </ChapterWrapper>
    );
};

export default AreYouAStudent;