import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BaseContainer from "../components/BaseContainer";
import BaseContent from "../components/BaseContent";
import TextBox from "../components/TextBox";
import { useParams } from "react-router-dom";

export default function LetterPage() {
  const {letterId} = useParams();
  const [letter, setLetter] = useState();

  const fetchLetterAndReply = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/${letterId}`);
    if(res.ok) {
      const result = await res.json();
      console.log(result);
      setLetter(result);
    }
  }

  useEffect(() => {
    fetchLetterAndReply();
  }, []);

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer />
        <TextBox content={letter?.content} writer={letter?.writer} type='LETTER' />
        <TextBox content={letter?.answerContent} writer={letter?.memberName} type='REPLY' />
      </BaseContent>
    </BaseContainer>
  )
}
