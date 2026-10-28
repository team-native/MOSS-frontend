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
import DetailPage from "./pages/common/DetailPage";
import ReportPage from "./pages/common/ReportPage";

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
        path: "/cafes",
        element: <SearchPage />,
      },
      {
        path: "/cafe/:id",
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
        path: "/favorite",
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
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
