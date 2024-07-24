import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function MemberLetterPage() {
  const content = '안녕! 요즘 뭐하고 지내?\n안녕! 요즘 뭐하고 지내?\n안녕! 요즘 뭐하고 지내?\n안녕! 요즘 뭐하고 지내?안녕! 요즘 뭐하고 지내?';
  const writer = '원채';

  const letterId = 4;
  const userId = 2;

  const navigate = useNavigate();

  const onClickBtn = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/${letterId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    if(res.ok) {
      navigate(`/${userId}`);
    } else {
      alert('편지를 삭제하는 데 실패했어요 🌧️');
    }
  }

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
        <TextBox content={content} writer={writer} type='LETTER' />
        <TextBox content={content} writer={writer} type='REPLY' />
        <Button onClickBtn={onClickBtn} btnName='삭제하기' />
      </BaseContent>
    </BaseContainer>
  )
}
