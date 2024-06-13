import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NotFound from "./components/error/NotFound";
import DetailPage from "./pages/detailPage/DetailPage";
import ScrollToTop from "./utils/ScrollToTop";
import ErrorBoundary from "./utils/ErrorBoundary";

import "./styles/global.scss";

function App() {
  const Layout = () => (
    <main className="main">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      ),
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path: "/ipo/:slug",
          element: <DetailPage />,
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
