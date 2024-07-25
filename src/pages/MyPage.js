import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import CloudyGrid from "../components/CloudyGrid";
import { useParams } from "react-router-dom";
import FloatingBtn from "../components/FloatingBtn";

export default function MyPage() {
  const {memberId} = useParams();

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
        <CloudyGrid memberId={memberId} />
        <FloatingBtn />
      </BaseContent>
    </BaseContainer>
  )
}