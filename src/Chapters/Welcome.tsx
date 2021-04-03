import * as React from 'react';
import styled from 'styled-components';

import ChapterWrapper from './ChapterWrapper';
import welcome from './motoko/welcome.svg';

import Speech from '../TextComponent/Speech';


const Canvas = styled.div`
  display: flex;
  flex-direction: row;
`;

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