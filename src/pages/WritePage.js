import React, { useEffect, useState } from 'react'
import InputBox from '../components/InputBox'
import InputLine from '../components/InputLine'
import BaseContainer from '../components/BaseContainer';
import BaseContent from '../components/BaseContent';
import HeaderContainer from '../components/HeaderContainer';
import FlexRow from '../components/FlexRow';
import Label from '../components/Label';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Gap from '../components/Gap';
import FetchMember from '../utils/FetchMember';

export default function WritePage() {
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  const {memberId} = useParams();
  const navigate = useNavigate();

  const [memberName, setMemberName] = useState();

  const fetchMember = async () => {
    const memberName = await FetchMember(memberId)
    setMemberName(memberName.name);
  }

  useEffect(() => {
    fetchMember();
  }, []);

  const onClickBtn = async () => {
    if(content === '') {
      alert('🌧️ 편지 내용을 채워줘요');
      return;
    } else if(writer === '') {
      alert('🌧️ 보내는 분을 알려줘요');
      return;
    }
    const body = {
      "memberId": memberId,
      "content": content,
      "writer": writer,
    }
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if(res.ok) {
      alert('🌧️ 편지를 보냈어요! 답장을 기다려 봐요');
      navigate(`/cloudy/${memberId}`);
    }
  }

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer name={memberName} />
        <InputBox onChange={setContent} content={content} name={memberName} />
        <FlexRow>
          <Label content='보내는 분 :' />
          <InputLine onChange={setWriter} content={writer} />
        </FlexRow>
        <Gap gap={100} />
        <Button onClickBtn={onClickBtn} btnName='보내기' />
      </BaseContent>
    </BaseContainer>
  )
}
