import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Shop from './Shop';
import ShopDetail from './ShopDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "topics",
        element: <Topics />,
      },
    ],
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      {
        path: ":shopId",
        element: <ShopDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
