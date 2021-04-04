import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import motokoIsTeacher from './motoko/teaching.svg';
import satoruResponding from './motoko/satoru-bench.svg';

import Speech from '../TextComponent/Speech';


const AreYouAStudent = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <Speech target="サトルさん、お元気ですか？" kana="サトルさん、おげんきですか？" source="Satoru, how are you?" />
                <img title="Motoko" src={motokoIsTeacher} alt="Motoko" />
                <img title="Satoru" src={satoruResponding} alt="Satoru" />
                <Speech target="ええ、元気です。" kana="ええ、げんきです。" source="Yes, I am  fine." />
            </Canvas>
        </ChapterWrapper>
    );
};

export default AreYouAStudent;