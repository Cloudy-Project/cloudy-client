import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import CloudyGrid from "../components/CloudyGrid";

export default function MyPage() {
  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
        <CloudyGrid memberId={2} />
      </BaseContent>
    </BaseContainer>
  )
}
