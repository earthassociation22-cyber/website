import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  useEffect(() => {
    const button = document.getElementById("navbar-toggle");
    const menu = document.getElementById("navbar-dropdown");

    const toggleMenu = () => {
      menu.classList.toggle("hidden");
    };

    button.addEventListener("click", toggleMenu);

    return () => {
      button.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 shadow-md fixed top-0 w-full z-[1200]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 mt-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Earth Assosciation"
            className="w-10 h-10 mr-2 rounded-full"
          />
          <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap">
            The Earth Assosciation
          </span>
        </Link>
        <button
          id="navbar-toggle"
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col items-center font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 ">
            {menu.map((menuItem) => (
              <li key={menuItem.item}>
                <Link
                  to={menuItem.link}
                  className="block py-2 pl-3 pr-4 uppercase text-[13px] font-raleway font-bold text-[#666] hover:text-pgreen  rounded  lg:p-0"
                  aria-current="page"
                >
                  {menuItem.item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/verify"
                className="block py-2 pl-3 pr-4 uppercase text-[13px] font-raleway font-bold text-[#666] hover:text-pgreen  rounded  lg:p-0"
              >
                Verify Certificate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

const menu = [
  {
    item: "Blogs",
    link: "/blog",
  },
  {
    item: "About us",
    link: "/about",
  },
  {
    item: "Gallery",
    link: "/gallery",
  },
  {
    item: "Meet our Team",
    link: "/team",
  },
  // {
  // 	item: "Our work",
  // 	link: "#",
  // },
  // {
  // 	item: "Campaigns",
  // 	link: "#",
  // },
  // {
  // 	item: "Get involved",
  // 	link: "#",
  // },
  // {
  // 	item: "Media Centre",
  // 	link: "#",
  // },
  // {
  // 	item: "Resource Center",
  // 	link: "#",
  // },
  // {
  // 	item: "Contact us",
  // 	link: "#",
  // },
];
