const Unicode_가 = 0xAC00;
const Unicode_힣 = 0xD7A3;

export default function getConsonant(inputName) {
  const lastChar = inputName.charCodeAt(inputName.length - 1);

  if (lastChar >= Unicode_가 && lastChar <= Unicode_힣) {
    const consonantCode = (lastChar - 44032) % 28;
    return consonantCode === 0 ? '의' : '이의';
  }

  //한글 이외의 경우 name+'의' 편지함 반환
  return '의';
};