import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  // 로그인 전 페이지
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/:userId",
    element: <LoginPage />
  },
  {
    path: "/cloudy/:userId",
    element: <LoginPage />
  },
  {
    path: "/cloudy/detail/:letterId",
    element: <LoginPage />
  },
  // 로그인 후 페이지
  {
    path: "/:userId",
    element: <LoginPage />
  },
  {
    path: "/settings/:userId",
    element: <LoginPage />
  },
  {
    path: "/detail/:letterId",
    element: <LoginPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
