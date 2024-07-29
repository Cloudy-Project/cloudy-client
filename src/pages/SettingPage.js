import React, { useEffect, useState } from 'react'
import BaseContainer from '../components/BaseContainer'
import BaseContent from '../components/BaseContent'
import Box from '../components/Box'
import HeaderContainer from '../components/HeaderContainer'
import FetchMember from '../utils/FetchMember'
import { useNavigate, useParams } from 'react-router-dom'
import Label from '../components/Label'
import InputLine from '../components/InputLine'
import Gap from '../components/Gap'
import UnderbarText from '../components/UnderbarText'
import Button from '../components/Button'
import TextBtn from '../components/TextBtn'

export default function SettingPage() {
  const {memberId} = useParams();
  const [memberName, setMemberName] = useState();

  const fetchMember = async () => {
    const member = await FetchMember(memberId)
    setMemberName(member.name);
  }

  useEffect(() => {
    fetchMember();
  }, []);

  const navigation = useNavigate();

  const onClickLink = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.host + '/cloudy/' + memberId);
    alert('클립보드에 링크가 복사되었어요!');
  }

  const onClickBtn = async () => {
    if(window.confirm('이름을 수정하시겠어요?') === false) {
      return;
    }
    const body = {
      "name": memberName
    }
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/member`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if(res.ok) {
      alert('이름을 수정했어요!');
      navigation(`/${memberId}`, {replace: true});
    }
  }

  const onClickLogout = async () => {
    if(window.confirm('로그아웃 하시겠어요?') === false) {
      return;
    }
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/logout`, {
      credentials: 'include'
    });
    if(res.ok) {
      navigation('/', {replace: true});
    }
  }
  const onClickDeleteId = async () => {
    if(window.confirm('정말 떠나시나요..? 모든 편지와 답장이 사라져요 🥲') === false) {
      return;
    }
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/member`, {
      method: 'DELETE',
      credentials: 'include'
    });
    if(res.ok) {
      alert("회원 탈퇴에 성공하였어요. 또 만나요 🥹");
      navigation('/', {replace: true});
    }
  }

  return (
    <BaseContainer>
      <BaseContent>
        <HeaderContainer name={memberName} />
        { memberName != null && (
          <Box>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                rowGap: 30,
                marginTop: 30
              }}>
              <Label content='내 이름' />
              <InputLine onChange={setMemberName} content={memberName} />
              <Label content='편지함 링크' />
              <UnderbarText onClick={(e) => onClickLink(e)}>
                {window.location.host + '/cloudy/' + memberId}
              </UnderbarText>
            </div>
            <Gap gap={200} />
            <Button onClickBtn={onClickBtn} btnName='저장하기' />
          </Box>
        )}
        <TextBtn onClick={onClickLogout}>- 로그아웃 -</TextBtn>
        <TextBtn onClick={onClickDeleteId}>- 떠나기 -</TextBtn>
      </BaseContent>
    </BaseContainer>
  )
}
