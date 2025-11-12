import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main className="min-h-[calc(100vh-285px)]">
        <ScrollToTop />
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
