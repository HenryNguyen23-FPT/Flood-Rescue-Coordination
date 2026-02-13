import { Outlet } from "react-router-dom";
import Header from "./Header";
<<<<<<< HEAD
function MainLayout() {
    return (
        <>
            <Header role={1} />
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>
        </>
=======
import Footer from "./Footer";
>>>>>>> cebcd5a3ef517905a77b80d4197c5a21250c7be2

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <main className="flex-1 overflow-hidden pt-20">
        <Outlet />
      </main>

      {/* <Footer /> */}

    </div>
  );
}

export default MainLayout;