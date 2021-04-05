import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import johnIsConfused from './motoko/john-is-confused.svg';
import cashier2 from './motoko/cashier2.svg';

import Speech from '../TextComponent/Speech';

const AreYouAStudent = () => {
    return (
        <ChapterWrapper>
            <Canvas>
                <img title="Cashier" src={cashier2} alt="Cashier" />
                <img title="John" src={johnIsConfused} alt="John" />
                <Speech target="これはトイレですか？" source="Is that a toilet?" />
            </Canvas>
        </ChapterWrapper>
    );
};

export default AreYouAStudent;