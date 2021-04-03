import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import ColorPalette from '../ColorPalatte';

type Props = {
    target: string,
    source: string,
};

const Wrapper = styled.div`
  border: 1px solid ${ColorPalette.font};
  border-radius: 3px;
  height: max-content;
  cursor: pointer;
  padding: 5px;
`;

const Target = styled.div`
  color: ${ColorPalette.font};
`;

const Source = styled.div`
  margin-top: 3px;
  color: ${ColorPalette.secondary};
`;

const Speech = ({ target, source }: Props) => {
   const [showSource, setShowSource] = useState(false); 

    return (
        <Wrapper role="button" onClick={() => setShowSource(!showSource)}>
            <Target>{target}</Target>
            { showSource && <Source>{source}</Source>}
        </Wrapper>
   );
};

export default Speech;