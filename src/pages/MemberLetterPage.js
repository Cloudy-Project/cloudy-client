import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AnswerInputBox from "../components/AnswerInputBox";
import Label from "../components/Label";

export default function MemberLetterPage() {
  const location = useLocation();
  const {letterId} = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState();
  const [loading, setLoading] = useState(true);

  const fetchLetterAndReply = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/${letterId}`);
    if(res.ok) {
      const result = await res.json();
      setLetter(result);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLetterAndReply();
  }, []);

  const onClickBtn = async () => {
    if(window.confirm('이 편지와 답장을 정말 삭제하시겠어요? 🥲') == false) {
      return;
    }
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

  if (loading) {
    return (
      <BaseContainer>
        <BaseContent>
          <Label content='로딩 중...' />
        </BaseContent>
      </BaseContainer>
    );
  }

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
        <TextBox content={letter?.content} writer={letter?.writer} type='LETTER' />
        {letter != null && (
          <AnswerInputBox
            letterId={letter?.id}
            memberId={letter?.memberId}
            replier={letter?.memberName}
            replyId={letter?.answerId}
            replyContent={letter?.answerContent}
            type='REPLY' />
        )}
        <Button onClickBtn={onClickBtn} btnName='삭제하기' />
      </BaseContent>
    </BaseContainer>
  )
}
