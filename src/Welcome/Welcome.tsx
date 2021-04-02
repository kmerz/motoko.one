import * as React from 'react';
import styled from 'styled-components';

import Speech from '../TextComponent/Speech';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Canvas = styled.div`
  display: flex;
  flex-direction: row;
`;

const Welcome = () => {
    return (
        <Wrapper>
            <Canvas>
                <svg width="100" height="300" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g id="body">
                            <ellipse fill="#fff" stroke="#000" cx="32.5" cy="37" id="head" rx="27.5" ry="32" transform="rotate(-7.8768, 32.5, 37)" />
                            <line stroke="#000" x1="37.99999" y1="69" x2="53.99999" y2="171" id="torso" />
                            <line stroke="#000" x1="54.11364" y1="170.22726" x2="29.11364" y2="242.22726" id="left-leg" />
                            <line stroke="#000" x1="78.86299" y1="170.72724" x2="53.86299" y2="242.72724" id="right-leg" transform="rotate(-37.9347, 66.363, 206.727)" />
                            <line stroke="#000" x1="41.50105" y1="86.49882" x2="79.00079" y2="117.9986" id="left-arm" />
                            <line stroke="#000" x1="14.50124" y1="94.49876" x2="52.00098" y2="125.99854" id="right-arm" transform="rotate(66.9903, 33.251, 110.249)" />
                            <line stroke="#000" x1="78.5008" y1="117.9986" x2="96.50067" y2="107.99867" id="left-forearm" />
                            <line stroke="#000" x1="20.5012" y1="147.99839" x2="38.50107" y2="137.99846" id="svg_11" transform="rotate(102.442, 29.501, 142.998)" />
                        </g>
                    </g>
                </svg>
                <Speech target="こんにちは" source="Hallo" />
            </Canvas>
        </Wrapper>
    );
};

export default Welcome;