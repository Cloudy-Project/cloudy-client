import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import TextBox from "../components/TextBox";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FetchMember from "../utils/FetchMember";
import Gap from '../components/Gap';

export default function LetterPage() {
  const {letterId} = useParams();
  const navigation = useNavigate();
  const [letter, setLetter] = useState();
  const location = useLocation();

  const [memberName, setMemberName] = useState();

  const fetchMember = async () => {
    const memberName = await FetchMember(location.state.memberId);
    if(memberName === null) {
      alert('잘못된 접근입니다 ❌');
      navigation('/', {replace: true});
      return;
    }
    setMemberName(memberName.name);
  }

  useEffect(() => {
    fetchMember();
  }, []);

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

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer memberId={location.state.memberId} name={memberName} />
        {letter !== undefined && (
          <>
          <TextBox content={letter.content} writer={letter.writer} type='LETTER' />
          <TextBox content={letter.replyContent} writer={letter.memberName} type='REPLY' />
          <Gap gap={20} />
          </>
        )}
      </BaseContent>
    </BaseContainer>
  )
}
