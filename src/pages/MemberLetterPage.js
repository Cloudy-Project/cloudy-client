import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function MemberLetterPage() {
  const location = useLocation();
  const {letterId} = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState();

  const fetchLetterAndReply = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/${letterId}`);
    if(res.ok) {
      const result = await res.json();
      setLetter(result);
    }
  }

  useEffect(() => {
    fetchLetterAndReply();
  }, []);

  const onClickBtn = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/${letterId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    if(res.ok) {
      navigate(`/${location.state.memberId}`);
    } else {
      alert('편지를 삭제하는 데 실패했어요 🌧️');
    }
  }

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
        <TextBox content={letter?.content} writer={letter?.writer} type='LETTER' />
        <TextBox content={letter?.answerContent} writer={letter?.memberName} type='REPLY' />
        <Button onClickBtn={onClickBtn} btnName='삭제하기' />
      </BaseContent>
    </BaseContainer>
  )
}
