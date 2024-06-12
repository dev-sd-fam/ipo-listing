import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import "./styles/global.scss";
import NotFound from "./components/error/NotFound";
import DetailPage from "./pages/detailPage/DetailPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const Layout = () => {
    
    return (
      <main className="main">
        <ScrollToTop/>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "/ipo/:slug",
          element: <DetailPage />,
          errorElement: <Error />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
