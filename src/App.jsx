import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  const Layout = () => {
    return (
      <main className="main">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
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
          element: <Home/>
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
