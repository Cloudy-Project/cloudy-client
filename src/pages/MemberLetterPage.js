import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReplyInputBox from "../components/ReplyInputBox";
import Label from "../components/Label";
import FetchMember from "../utils/FetchMember";

export default function MemberLetterPage() {
  const location = useLocation();
  const navigation = useNavigate();
  const {letterId} = useParams();
  const [letter, setLetter] = useState();
  const [loading, setLoading] = useState(true);
  const [replyContent, setReplyContent] = useState();

  const [memberName, setMemberName] = useState();

  const isLogin = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/member`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(res.ok) {
      console.log('로그인 확인 완료');
    } else {
      alert('잘못된 접근입니다 ❌');
      navigation('/', {replace: true});
    }
  }

  useEffect(() => {
    isLogin();
  }, [])

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
      setReplyContent(result.replyContent);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLetterAndReply();
  }, []);

  const onClickSubmit = async () => {
    const method = letter.replyId === null ? 'POST' : 'PATCH';
    let body;
    if(method === 'POST') {
      body = {
        "letterId": letterId,
        "memberId": location.state.memberId,
        "content": replyContent
      }
    } else if(method === 'PATCH') {
      body = {
        "id": letter.replyId,
        "content": replyContent
      }
    }
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/reply`, {
      method: method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if(res.ok) {
      if(method === 'POST') {
        alert('🌧️ 답장을 보냈어요!');
      } else if(method === 'PATCH') {
        alert('🌧️ 답장을 수정했어요!');
      }
      window.location.reload();
    } else {
      alert('잘못된 접근입니다 ❌');
      navigation('/', {replace: true});
    }
  }

  const onChange = (e) => setReplyContent(e.target.value);

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
        <HeaderContainer memberId={location.state.memberId} name={memberName} />
        {letter !== undefined && (
          <>
          <TextBox letterId={letterId} memberId={location.state.memberId} content={letter.content} writer={letter.writer} type='LETTER' />
          <ReplyInputBox
            replier={letter.memberName}
            replyContent={replyContent}
            onChange={onChange}
            type='REPLY' />
          </>
        )}
        <Button onClickBtn={onClickSubmit} btnName='저장하기' />
      </BaseContent>
    </BaseContainer>
  )
}
