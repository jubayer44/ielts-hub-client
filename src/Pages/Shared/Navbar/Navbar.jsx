import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <h2 className="text-2xl font-bold font-mono text-violet-600">
                IELTS Hub
              </h2>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline decoration-2" : null
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline decoration-2" : null
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline decoration-2" : null
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              {user ? (
                <>
                  <li className="text-gray-600 hover:text-blue-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline decoration-2" : null
                      }
                      to="/my-reviews"
                    >
                      My Review
                    </NavLink>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline decoration-2" : null
                      }
                      to="/add-service"
                    >
                      Add Service
                    </NavLink>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <NavLink
                      onClick={handleLogOut}
                      className={({ isActive }) =>
                        isActive ? "underline decoration-2" : null
                      }
                      to="/login"
                    >
                      Log Out
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="text-gray-600 hover:text-blue-600">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "underline decoration-2" : null
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              )}
              <li className="">
                <img
                  className="w-12 h-12 rounded-full"
                  title={user?.displayName}
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png"
                  }
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
