import * as React from 'react';

import ChapterWrapper from './ChapterWrapper';
import Canvas from './Canvas';
import motokoAsking from './motoko/motoko-is-asking-satoru.svg';
import satoruAnswer from './motoko/satoru-is-a-japanese-student.svg';

import Speech from '../TextComponent/Speech';
import SpeechGroup from '../TextComponent/SpeechGroup';

const AreYouAStudent = () => {
  return (
    <ChapterWrapper>
      <Canvas>
        <SpeechGroup>
          <Speech target="出身はどちらですか?" kana="しゅしん わ どちらです か?" source="Where are you from?" />
          <Speech target="いいえ, あなたは東京出身ではありません。" kana="いいえ , あなた は とうきょう しゅっしん で は ありません。"
                  source="No, you are not from Tokyo." />
        </SpeechGroup>
        <img title="Motoko" src={motokoAsking} alt="Motoko" />
        <img title="Satoru" src={satoruAnswer} alt="Satoru" />
        <SpeechGroup>
          <Speech target="東京出身です。" kana="とうきょう しゅsしんです。" source="I am from Tokyo." />
          <Speech target="はい、京都に住んでいます。" kana="はい、 きょうと に すんでいます。" source="Yes, I live in Kyoto." />
        </SpeechGroup>
      </Canvas>
    </ChapterWrapper>
  );
};

export default AreYouAStudent;
