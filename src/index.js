import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import MemberLetterPage from "./pages/MemberLetterPage";
import LetterPage from "./pages/LetterPage";

const router = createBrowserRouter([
  // 로그인 전 페이지
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/cloudy/:memberId",
    element: <MyPage />,
  },
  {
    path: "/cloudy/:memberId",
    element: <LoginPage />,
  },
  {
    path: "/cloudy/detail/:letterId",
    element: <LetterPage />,
  },
  // 로그인 후 페이지
  {
    path: "/:memberId",
    element: <MyPage />,
  },
  {
    path: "/settings/:memberId",
    element: <LoginPage />,
  },
  {
    path: "/detail/:letterId",
    element: <MemberLetterPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
