<<<<<<< HEAD
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
=======
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
>>>>>>> 2dd8d9229b9f0ca48381c2bb598d8bf616752e3e

function App() {
  return <RouterProvider router={router} />;
}
<<<<<<< HEAD
=======

export default App;
>>>>>>> 2dd8d9229b9f0ca48381c2bb598d8bf616752e3e
