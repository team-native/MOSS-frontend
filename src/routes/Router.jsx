
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";

// 로그인 / 회원가입
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";

// 업주 페이지
import ReviewPage from "../pages/owner/ReviewPage";
import EventPage from "../pages/owner/EventPage";
import StorePage from "../pages/owner/StorePage";

// 사용자 페이지
import MainPage from "../pages/user/MainPage";
import MyPage from "../pages/user/MyPage";
import FavoritePage from "../pages/user/FavoritePage";

// 공통 페이지
import DetailPage from "../pages/common/DetailPage";
import ReviewWritePage from "../pages/common/ReviewWritePage";
import SearchPage from "../pages/common/SearchPage";
import ReportPage from "../pages/common/ReportPage";

export const router = createBrowserRouter([
  // 1. 로그인 / 회원가입
  // Layout 바깥에 배치하므로 헤더와 푸터가 표시되지 않음
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },

  // 2. 나머지 페이지
  // Layout 안에 배치하므로 헤더와 푸터가 표시됨
  {
    element: <Layout />,
    children: [
      // 사용자 페이지
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },

      // 업주 페이지
      {
        path: "/owner/review",
        element: <ReviewPage />,
      },
      {
        path: "/owner/event",
        element: <EventPage />,
      },
      {
        path: "/owner/store",
        element: <StorePage />,
      },

      // 검색 / 상세 / 리뷰 작성 / 제보 페이지
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/place/:id",
        element: <DetailPage />,
      },
      {
        path: "/review/write",
        element: <ReviewWritePage />,
      },
      {
        path: "/report",
        element: <ReportPage />,
      },
    ],
  },
]);
