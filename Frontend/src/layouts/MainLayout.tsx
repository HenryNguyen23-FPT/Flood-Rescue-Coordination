import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header role={1} />

      <main className="flex-1 overflow-hidden pt-20">
        <Outlet />
      </main>

      {/* Footer bật khi cần */}
      {/* <Footer /> */}

    </div>
  );
}

export default MainLayout;
