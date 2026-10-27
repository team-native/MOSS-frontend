import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/common/Layout";
import MainPage from "./pages/user/MainPage";
import SearchPage from "./pages/common/SearchPage";
import MyPage from "./pages/user/MyPage";
import FavoritePage from "./pages/user/FavoritePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/cafes", // '카페 찾기' 경로 지원
        element: <SearchPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/bookmarks", // 헤더 링크 대응
        element: <FavoritePage />,
      },
      {
        path: "*", // 없는 경로 접근 시 메인으로 이동
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
