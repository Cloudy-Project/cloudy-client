import axios from 'axios';

export async function getSessionInfo () {
    const currentUrl = window.location.href;
    try {
        const response = await axios.get(currentUrl); // API 요청
        return response.data.isLoggedIn; // 로그인 상태에 따라 true 또는 false 반환
    } 
    catch (error) {
        return false; // 오류 발생 시 false 반환
    }
};