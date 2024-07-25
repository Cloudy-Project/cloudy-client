import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import CloudyGrid from "../components/CloudyGrid";
import { useParams } from "react-router-dom";
import FetchMember from "../utils/FetchMember";
import NoLetterHere from "../components/NoLetterHere";
import FloatingBtn from "../components/FloatingBtn";

export default function MemberMyPage() {
  const {memberId} = useParams();
  const [member, setMember] = useState();

  const fetchMember = async () => {
    const member = await FetchMember(memberId)
    setMember(member.name);
  }

  useEffect(() => {
    fetchMember();
  }, [memberId]);

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
          <HeaderContainer name={member} />
        )}
        {letters.length > 0
        ? (
          <CloudyGrid memberId={memberId} letters={letters} />
        )
        : (
          <NoLetterHere isLogin={true} />
        )}
        <FloatingBtn />
      </BaseContent>
    </BaseContainer>
  )
}
