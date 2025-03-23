import React, { use, useState } from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import UserMenu from "./UserMenu";

function Header() {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const [isMobile] = useMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector((state) => state?.user);

  const isSearchPage = location.pathname === "/search";

  const handleCloseUserMenu = () => {
      setOpenUserMenu(false);
   };

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <header className="h-24 py-2 lg:h-20 shadow-md sticky top-0 z-40 flex flex-col items-center justify-center gap-1 bg-white">
      {!(isMobile && isSearchPage) && (
        <div className="container mx-auto flex items-center justify-between px-2">
          <div className="h-full">
            <Link to={"/"} className="h-full flex justify-center items-center">
              <img
                className="hidden lg:block"
                src={logo}
                width={170}
                height={60}
                alt="logo"
              />
              <img
                className="lg:hidden"
                src={logo}
                width={120}
                height={60}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <Search />
          </div>

          <div>
            {/* this for mobile view */}
            <button className="text-neutral-500 hover:text-neutral-700 lg:hidden">
              <FaRegCircleUser size={30} />
            </button>

            {/* this for desktop view */}
            <div className="hidden lg:flex items-center gap-10 cursor-pointer">
              {user?._id ? (
                 <div className="relative">
                     <div className="flex item-center gap-2 select-none" onClick={() => setOpenUserMenu(prev => !prev)}>
                          <FaRegCircleUser size={25} />
                           <p className="text-lg">{user?.name} </p>
                           {
                              openUserMenu ? 
                              <GoTriangleUp size={20} /> 
                              : 
                              <GoTriangleDown size={20} />
                           }
                     </div>
                     {
                        openUserMenu && (
                           <div className="absolute right-0 top-10 ">
                              <div className="bg-white shadow-md rounded p-4 min-w-52">
                                    <UserMenu close = {handleCloseUserMenu}/>
                              </div>
                           </div>
                        )
                     }
                   </div>
              ) : (
                <button
                  onClick={redirectToLoginPage}
                  className="text-lg px-1  cursor-pointer"
                >
                  Login
                </button>
              )

              }

              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-800 px-4 py-3 rounded-lg text-white">
                <div className="animate-bounce">
                  <BsCart4 size={30} />
                </div>
                <div className="font-semibold">
                  <p> My Cart </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
}

export default Header;
