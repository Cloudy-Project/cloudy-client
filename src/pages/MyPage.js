import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import CloudyGrid from "../components/CloudyGrid";
import { useParams } from "react-router-dom";
import FetchMember from "../utils/FetchMember";

export default function MyPage() {
  const {memberId} = useParams();
  const [member, setMember] = useState();

  const fetchMember = async () => {
    const member = await FetchMember(memberId)
    setMember(member.name);
  }

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <BaseContainer>
      <BaseContent>
        {member !== null && (
          <HeaderContainer name={member} />
        )}
        <CloudyGrid memberId={memberId} />
      </BaseContent>
    </BaseContainer>
  )
}
