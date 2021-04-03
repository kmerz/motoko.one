import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import ColorPalette from '../ColorPalatte';

const Wrapper = styled.div`
  border: 1px solid ${ColorPalette.font};
  border-radius: 3px;
  height: max-content;
  cursor: pointer;
  padding: 5px;
  margin: 2px;
`;

const Target = styled.div`
  color: ${ColorPalette.font};
`;

const Kana = styled.div`
  margin-top: 3px;
  color: ${ColorPalette.info};
`;

const Source = styled.div`
  margin-top: 3px;
  color: ${ColorPalette.secondary};
`;

type Props = {
    target: string,
    source: string,
    kana?: string,
};


const Speech = ({ target, source, kana }: Props) => {
   const [showSource, setShowSource] = useState(false); 

    return (
        <Wrapper role="button" onClick={() => setShowSource(!showSource)}>
            <Target>{target}</Target>
            { showSource &&
                <>{kana && (<Kana>{kana}</Kana>)}
                    <Source>{source}</Source></>
            }
        </Wrapper>
   );
};

export default Speech;