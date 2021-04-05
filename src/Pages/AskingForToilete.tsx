import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import johnIsAsking from './motoko/john-is-asking.svg';
import cashier from './motoko/cashier.svg';

import Speech from '../TextComponent/Speech';

const AreYouAStudent = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <Speech target="トイレはどこですか？" source="Where is the restroom?" />
                <img title="John" src={johnIsAsking} alt="John" />
                <img title="Cashier" src={cashier} alt="Cashier" />
                <Speech target="トイレはあります。" source="The toilet is there." />
            </Canvas>
        </ChapterWrapper>
    );
};

export default AreYouAStudent;