import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import TextBox from "../components/TextBox";

export default function MyPage() {
  const content = '안녕! 요즘 뭐하고 지내?\n안녕! 요즘 뭐하고 지내?\n안녕! 요즘 뭐하고 지내?\n안녕! 요즘 뭐하고 지내?안녕! 요즘 뭐하고 지내?';
  const writer = '원채';

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
        <TextBox content={content} writer={writer} type='LETTER' />
        <TextBox content={content} writer={writer} type='REPLY' />
      </BaseContent>
    </BaseContainer>
  )
}
