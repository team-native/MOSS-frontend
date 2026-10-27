import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/user/MainPage";
import MyPage from "./pages/user/MyPage";
import FavoritePage from "./pages/user/FavoritePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/favorite",
    element: <FavoritePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
