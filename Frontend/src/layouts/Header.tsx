<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Menu, X, CircleUserRound, Bell } from 'lucide-react';
=======
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
>>>>>>> cebcd5a3ef517905a77b80d4197c5a21250c7be2
import { useState } from 'react';
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

export default function Header({role}:{role:number}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

<<<<<<< HEAD
    switch(role){
        case 1: return <UserHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} toggleMobile={toggleMobile}/>;
        case 2: return <MngHeader/>;
        case 3: return <CoordHeader noty={false}/>;
        default: return  null;
    }
}


export function CoordHeader({noty}:{noty:boolean}) {
    const logout =
        "!text-gray-200 !hover:text-gray-200 font-bold ml-[0.5vw] cursor-pointer";

    return (
        <header className="bg-slate-950 shadow-md text-gray-200">
            <div
                className="hidden md:flex flex-row items-center justify-between px-[2vw] py-[2vh]
        w-full fixed top-0 left-0 bg-slate-950 text-gray-200 shadow z-50"
            >
                <div className="flex flex-col items-start">
                    <p className="text-[3vh] font-bold">
                        Bảng quản lý điều phối cứu hộ
                    </p>
                    <p>Điều phối viên tiếp nhận và phân công nhiệm vụ cứu hộ</p>
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <Button className="!bg-gray-200 !text-black">
                        <Bell className="!h-6 !w-6" fill="currentColor" strokeWidth={2.5} />
                        Thông báo
                        {noty ? <div className="absolute mt-[-5vh] ml-[9.8vw] w-4 h-4 bg-rose-500 rounded-full"></div>: null}
                    </Button>

                    <div className="flex flex-row gap-1 items-center">
                        <CircleUserRound size={30} />
                        <span
                            onClick={() => {}}
                            className={logout}>
                          Đăng Xuất
                        </span>

                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="flex md:hidden items-center justify-between px-4 py-3 fixed top-0 left-0 w-full bg-slate-950 z-50">
                <p className="font-bold">Bảng quản lý điều phối cứu hộ</p>

                <div className="flex flex-row gap-2 items-center">
                    <div>
                        <Bell fill={"currentColor"}/>
                        {noty ? <div className="absolute mt-[-3.5vh] ml-[2vh] w-2 h-2 bg-rose-500 rounded-full"></div>: null}
                    </div>
                    <span
                        onClick={() => {}}
                        className={logout}>
                        Đăng Xuất
                    </span>
                </div>
            </div>
        </header>
    );
}

export function UserHeader({mobileOpen, setMobileOpen, toggleMobile}:
                           {mobileOpen:boolean; setMobileOpen:(e:boolean)=>void; toggleMobile:()=>void}) {
    return (
        <header className="bg-white shadow-md">
            <div className="w-full fixed top-0 left-0 bg-white shadow z-50 ">
                <div className="flex justify-between items-center h-20 px-8 py-4">
                    {/* Logo */}

                    <img
                        src={logo}
                        alt="Flood Rescue Logo"
                        className="h-12 w-auto"
                    />


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {/* Home */}
                                <NavigationMenuItem>
                                    <Link
                                        to="/"
                                        className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                                    >
                                        Trang chủ
                                    </Link>
                                </NavigationMenuItem>

                                {/* Map */}
                                <NavigationMenuItem>
                                    <Link
                                        to="/map"
                                        className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                                    >
                                        Bản đồ
                                    </Link>
                                </NavigationMenuItem>

                                {/* Search */}
                                <NavigationMenuItem>
                                    <Link
                                        to="/search"
                                        className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                                    >
                                        Tra cứu
                                    </Link>
                                </NavigationMenuItem>

                                {/* Contact */}
                                <NavigationMenuItem>
                                    <Link
                                        to="/contact"
                                        className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                                    >
                                        Liên hệ
                                    </Link>
                                </NavigationMenuItem>

                                {/* Usage Guide */}
                                <NavigationMenuItem>
                                    <Link
                                        to="/guide"
                                        className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                                    >
                                        Hướng dẫn sử dụng
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Desktop Login Button */}
                    <div className="hidden md:block">
                        <Link to="/login">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Đăng nhập
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMobile}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition"
                    >
                        {mobileOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileOpen && (
                    <nav className="md:hidden pb-4">
                        <div className="space-y-2">
                            <Link
                                to="/"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                Trang chủ
                            </Link>
                            <Link
                                to="/map"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                Bản đồ
                            </Link>
                            <Link
                                to="/search"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                Tra cứu
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                Liên hệ
                            </Link>
                            <Link
                                to="/guide"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                Hướng dẫn sử dụng
                            </Link>
                            <div className="px-3 py-2 pt-4 border-t">
                                <Link to="/login" onClick={() => setMobileOpen(false)} className="w-full">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                        Đăng nhập
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export function MngHeader(){
    return(
        <></>
    );
=======
  const getLinkClass = (path: string) => {
    const baseClass = "px-6 py-3 transition hover:text-blue-600";
    const activeClass = "font-bold underline text-blue-600 decoration-2 underline-offset-4"; 
    const inactiveClass = "text-gray-700 font-medium";
    return location.pathname === path ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  }
  //Cái nì cho mobile
  const getMobileLinkClass = (path: string) => {
    const baseClass = "block px-3 py-2 rounded-md transition hover:bg-gray-50 hover:text-blue-600";
    const activeClass = "font-bold underline text-blue-600 bg-blue-50"; 
    const inactiveClass = "text-gray-700 font-medium";
    return location.pathname === path ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  }

  return (
    <header className="bg-white shadow-md">
      <div className="w-full fixed top-0 left-0 bg-white shadow z-50 ">
        <div className="flex justify-between items-center h-20 px-4 py-4">
          {/* Logo */}
          <Link to="/">
            <img
              src="/Logo.png"
              alt="Flood Rescue Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={getLinkClass('/')} 
                  >
                    Trang chủ
                  </Link>
                </NavigationMenuItem>

                {/* Map */}
                <NavigationMenuItem>
                  <Link
                    to="/map"
                    className={getLinkClass('/map')}
                  >
                    Bản đồ
                  </Link>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                  <Link
                    to="/search"
                    className={getLinkClass('/search')}
                  >
                    Tra cứu
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={getLinkClass('/contact')}
                  >
                    Liên hệ
                  </Link>
                </NavigationMenuItem>

                {/* Usage Guide */}
                <NavigationMenuItem>
                  <Link
                    to="/guide"
                    className={getLinkClass('/guide')}
                  >
                    Hướng dẫn sử dụng
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Đăng nhập
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobile}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                to="/"
                className={getMobileLinkClass('/')} 
                onClick={() => setMobileOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                to="/map"
                className={getMobileLinkClass('/map')}
                onClick={() => setMobileOpen(false)}
              >
                Bản đồ
              </Link>
              <Link
                to="/search"
                className={getMobileLinkClass('/search')}
                onClick={() => setMobileOpen(false)}
              >
                Tra cứu
              </Link>
              <Link
                to="/contact"
                className={getMobileLinkClass('/contact')}
                onClick={() => setMobileOpen(false)}
              >
                Liên hệ
              </Link>
              <Link
                to="/guide"
                className={getMobileLinkClass('/guide')}
                onClick={() => setMobileOpen(false)}
              >
                Hướng dẫn sử dụng
              </Link>
              <div className="px-3 py-2 pt-4 border-t">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Đăng nhập
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
>>>>>>> cebcd5a3ef517905a77b80d4197c5a21250c7be2
}