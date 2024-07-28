export async function getSessionInfo(memberId) {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_API_URL + `/member/${memberId}`, {
            method: 'GET',
            credentials: 'include', // 쿠키를 포함하도록 설정
        });

        // 401 상태인 경우 false를 반환
        if (response.status === 401) {
            return false; 
        }

        // 응답이 성공적이라면 true (IsLoggedIn)
        if (response.ok) {
            return true; // 로그인 상태로 간주
        } else {
            return false; // 다른 오류 발생 시 false 반환
        }
    } catch (error) {
        console.error("Error fetching session info:", error); 
        return false; // 오류 발생 시 false 반환
    }
}