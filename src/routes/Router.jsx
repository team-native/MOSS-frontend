import { createBrowserRouter } from 'react-router-dom';

// 1. 회원가입 / 로그인 & 업주 페이지
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import ReviewPage from '../pages/owner/ReviewPage'; // 수정!
import EventPage from '../pages/owner/EventPage';   // 수정!
import StorePage from '../pages/owner/StorePage';   // 수정!

// 2. 메인 / 마이페이지 / 찜 페이지
import MainPage from '../pages/user/MainPage';
import MyPage from '../pages/user/MyPage';
import FavoritePage from '../pages/user/FavoritePage';

// 3. 상세 / 리뷰 작성 / 검색 / 제보 페이지
import DetailPage from '../pages/common/DetailPage';
import ReviewWritePage from '../pages/common/ReviewWritePage';
import SearchPage from '../pages/common/SearchPage';
import ReportPage from '../pages/common/ReportPage';

export const router = createBrowserRouter([
  // 메인 및 유저 영역
  { path: '/', element: <MainPage /> },
  { path: '/mypage', element: <MyPage /> },
  { path: '/favorites', element: <FavoritePage /> },

  // 인증 및 업주 영역
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/owner/review', element: <ReviewPage /> },
  { path: '/owner/event', element: <EventPage /> },
  { path: '/owner/store', element: <StorePage /> },

  // 검색, 상세, 제보, 리뷰 작성 영역
  { path: '/search', element: <SearchPage /> },
  { path: '/place/:id', element: <DetailPage /> },
  { path: '/review/write', element: <ReviewWritePage /> },
  { path: '/report', element: <ReportPage /> },
]);