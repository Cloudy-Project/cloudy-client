import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import LetterPage from './pages/LetterPage';
import WritePage from './pages/WritePage';
import MemberMyPage from './pages/MemberMyPage';
import SettingPage from './pages/SettingPage';
import MemberLetterPage from './pages/MemberLetterPage';
import LoginPage from './pages/LoginPage';

function App() {

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setScreenSize();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path='/cloudy'>
          <Route path=':memberId' element={<MyPage />} />
          <Route path='detail/:letterId' element={<LetterPage />} />
          <Route path='letter/member/:memberId' element={<WritePage />} />
        </Route>
      </Routes>
      <Routes>
        <Route path='/:memberId' element={<MemberMyPage />} />
        <Route path='/settings/:memberId' element={<SettingPage />} />
        <Route path='/detail/:letterId' element={<MemberLetterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
