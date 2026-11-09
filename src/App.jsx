import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Layout from "./components/common/Layout";

// 인증 페이지
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import UserSignupPage from "./pages/auth/UserSignupPage";
import OwnerSignupPage1 from "./pages/auth/OwnerSignupPage1";
import OwnerSignupPage2 from "./pages/auth/OwnerSignupPage2";
import OwnerSignupPage3 from "./pages/auth/OwnerSignupPage3";
import AccountHelpPage from "./pages/auth/AccountHelpPage";

// 사용자 페이지
import MainPage from "./pages/user/MainPage";
import MyPage from "./pages/user/MyPage";
import FavoritePage from "./pages/user/FavoritePage";
import MyReviewsPage from "./pages/user/MyReviewsPage";

// 업주 페이지
import DashboardPage from "./pages/owner/DashboardPage";
import ReviewPage from "./pages/owner/ReviewPage";
import EventPage from "./pages/owner/EventPage";
import StorePage from "./pages/owner/StorePage";

// 공통 페이지
import DetailPage from "./pages/common/DetailPage";
import ReviewWritePage from "./pages/common/ReviewWritePage";
import SearchPage from "./pages/common/SearchPage";
import ReportPage from "./pages/common/ReportPage";

const router = createBrowserRouter([
  // 인증 페이지
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/signup/user",
    element: <UserSignupPage />,
  },
  {
    path: "/signup/owner",
    element: <OwnerSignupPage1 />,
  },
  {
    path: "/owner-signup/2",
    element: <OwnerSignupPage2 />,
  },
  {
    path: "/owner-signup/3",
    element: <OwnerSignupPage3 />,
  },
  {
    path: "/find-account",
    element: <AccountHelpPage />,
  },

  // 일반 페이지
  {
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/cafes",
        element: <SearchPage />,
      },
      {
        path: "/cafe/:id",
        element: <DetailPage />,
      },
      {
        path: "/place/:id",
        element: <DetailPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/my-reviews",
        element: <MyReviewsPage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },
      {
        path: "/bookmarks",
        element: <FavoritePage />,
      },
      {
        path: "/reports",
        element: <ReportPage />,
      },
      {
        path: "/my-report",
        element: <ReportPage />,
      },
      {
        path: "/report",
        element: <ReportPage />,
      },
      {
        path: "/review/write",
        element: <ReviewWritePage />,
      },

      // 업주 페이지
      {
        path: "/owner/dashboard",
        element: <DashboardPage />,
      },
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
    ],
  },

  // 존재하지 않는 주소
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
