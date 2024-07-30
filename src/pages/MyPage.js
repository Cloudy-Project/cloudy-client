import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import CloudyGrid from "../components/CloudyGrid";
import { useNavigate, useParams } from "react-router-dom";
import FetchMember from "../utils/FetchMember";
import NoLetterHere from "../components/NoLetterHere";
import getConsonant2 from "../utils/GetConsonant2";
import FloatingBtn from "../components/FloatingBtn";

export default function MyPage() {
  const {memberId} = useParams();
  const navigation = useNavigate();
  const [member, setMember] = useState();

  const fetchMember = async () => {
    const member = await FetchMember(memberId);
    if(member === null) {
      alert('잘못된 접근입니다 ❌');
      navigation('/', {replace: true});
      return;
    }
    setMember(member.name);
  }

  useEffect(() => {
    fetchMember();
  }, []);

  // 편지 전체 조회
  const [letters, setLetters] = useState([]);

  const fetchLetters = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/member/${memberId}`);
    if(res.ok) {
      const result = await res.json();
      setLetters(result);
    }
  }

  useEffect(() => {
    fetchLetters();
  }, []);

  return (
    <BaseContainer>
      <BaseContent>
        {member !== null && (
          <HeaderContainer memberId={memberId} name={member} />
        )}
        {letters.length > 0
        ? (
          <CloudyGrid memberId={memberId} letters={letters} />
        )
        : member !== undefined
        ? (
          <NoLetterHere isLogin={false} memberName={member + getConsonant2(member)} />
        )
        : (
          <></>
        )}
        <FloatingBtn />
      </BaseContent>
    </BaseContainer>
  )
}