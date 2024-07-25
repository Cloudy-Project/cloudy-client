export default async function FetchMember(memberId) {
  const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/member/${memberId}`);
  if(res.ok) {
    const result = await res.json();
    return result;
  } else {
    return null;
  }
}