import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import UserSignupPage from "./pages/auth/UserSignupPage";
import OwnerSignupPage1 from "./pages/auth/OwnerSignupPage1";
import OwnerSignupPage2 from "./pages/auth/OwnerSignupPage2";
import OwnerSignupPage3 from "./pages/auth/OwnerSignupPage3";
import AccountHelpPage from "./pages/auth/AccountHelpPage";

import MainPage from "./pages/user/MainPage";
import MyPage from "./pages/user/MyPage";
import FavoritePage from "./pages/user/FavoritePage";

import ReviewPage from "./pages/owner/ReviewPage";
import EventPage from "./pages/owner/EventPage";
import StorePage from "./pages/owner/StorePage";

import DetailPage from "./pages/common/DetailPage";
import ReviewWritePage from "./pages/common/ReviewWritePage";
import SearchPage from "./pages/common/SearchPage";
import ReportPage from "./pages/common/ReportPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증 페이지: 자체 헤더와 푸터 사용 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/user" element={<UserSignupPage />} />
        <Route path="/signup/owner" element={<OwnerSignupPage1 />} />
        <Route path="/owner-signup/2" element={<OwnerSignupPage2 />} />
        <Route path="/owner-signup/3" element={<OwnerSignupPage3 />} />
        <Route path="/find-account" element={<AccountHelpPage />} />

        {/* 일반 페이지: 공통 Layout 사용 */}
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/favorites" element={<FavoritePage />} />

          <Route path="/owner/review" element={<ReviewPage />} />
          <Route path="/owner/event" element={<EventPage />} />
          <Route path="/owner/store" element={<StorePage />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="/place/:id" element={<DetailPage />} />
          <Route path="/review/write" element={<ReviewWritePage />} />
          <Route path="/report" element={<ReportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
