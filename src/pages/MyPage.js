import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";

export default function MyPage() {
  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
      </BaseContent>
    </BaseContainer>
  )
}
