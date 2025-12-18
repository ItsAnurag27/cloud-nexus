import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Mainmanuoffcanvas from "./Mainmanuoffcanvas";
import HeaderSidePanel from "../pages/aboutus/HeaderSidePanel";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Mainmanuoffcanvas />
      <HeaderSidePanel />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
