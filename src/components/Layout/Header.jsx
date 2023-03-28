import React from "react";
import { NavLink, Link } from "react-router-dom";
import LOGO from "../../../public/assets/BazzarVerseLOGO.svg";
import LOGOMOBILE from "../../../public/assets/FAVICON.svg";

const Header = () => {
  return (
    <header className="m-0 p-0">
      <nav className="bg-background shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-8 w-auto md:hidden"
                    src={LOGOMOBILE}
                    alt="BizaarVerse"
                  />
                  <img
                    className="h-12 w-auto hidden md:block"
                    src={LOGO}
                    alt="BizaarVerse"
                  />
                </Link>
              </div>
              <div className="ml-6 flex space-x-8">
                <NavLink
                  to="#"
                  activeClassName="font-bold border-b-2 border-indigo-500 text-gray-900"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Products
                </NavLink>
                <NavLink
                  to="#"
                  activeClassName="font-bold border-b-2 border-indigo-500 text-gray-900"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-background p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View cart</span>
                <svg
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C12 24.3956 11.8827 24.7822 11.6629 25.1111C11.4432 25.44 11.1308 25.6964 10.7654 25.8478C10.3999 25.9991 9.99778 26.0387 9.60982 25.9616C9.22186 25.8844 8.86549 25.6939 8.58579 25.4142C8.30608 25.1345 8.1156 24.7781 8.03843 24.3902C7.96126 24.0022 8.00087 23.6001 8.15224 23.2346C8.30362 22.8692 8.55996 22.5568 8.88886 22.3371C9.21776 22.1173 9.60444 22 10 22C10.5304 22 11.0391 22.2107 11.4142 22.5858C11.7893 22.9609 12 23.4696 12 24ZM23 22C22.6044 22 22.2178 22.1173 21.8889 22.3371C21.56 22.5568 21.3036 22.8692 21.1522 23.2346C21.0009 23.6001 20.9613 24.0022 21.0384 24.3902C21.1156 24.7781 21.3061 25.1345 21.5858 25.4142C21.8655 25.6939 22.2219 25.8844 22.6098 25.9616C22.9978 26.0387 23.3999 25.9991 23.7654 25.8478C24.1308 25.6964 24.4432 25.44 24.6629 25.1111C24.8827 24.7822 25 24.3956 25 24C25 23.4696 24.7893 22.9609 24.4142 22.5858C24.0391 22.2107 23.5304 22 23 22ZM28.9562 6.29375L25.39 17.8825C25.2032 18.4968 24.8234 19.0346 24.3068 19.416C23.7903 19.7975 23.1646 20.0022 22.5225 20H10.5087C9.85747 19.9976 9.2245 19.7842 8.70463 19.3919C8.18477 18.9996 7.80598 18.4494 7.625 17.8237L3.1025 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.1025C3.53676 0.00144056 3.95888 0.143485 4.30567 0.404872C4.65246 0.666259 4.90526 1.03293 5.02625 1.45L6.04 5H28C28.1565 4.99994 28.3108 5.03661 28.4505 5.10706C28.5903 5.17751 28.7115 5.27976 28.8045 5.40561C28.8976 5.53145 28.9597 5.67737 28.9861 5.83163C29.0124 5.98588 29.0022 6.14417 28.9562 6.29375ZM26.6462 7H6.61125L9.5475 17.275C9.60724 17.4839 9.73336 17.6676 9.90679 17.7984C10.0802 17.9292 10.2915 18 10.5087 18H22.5225C22.7365 18.0001 22.9448 17.9315 23.117 17.8044C23.2891 17.6773 23.4159 17.4983 23.4788 17.2938L26.6462 7Z"
                    fill="#092C4C"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;