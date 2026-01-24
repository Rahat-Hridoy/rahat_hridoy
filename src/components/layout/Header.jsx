import { CiLinkedin, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RiRedditLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed top-6 left-0 w-full z-100 ">
      <nav className="container mx-auto ">
        <div className="wrapper flex items-center justify-between gap-7 min-h-[60px] md:min-h-[90px] px-[10px] md:px-[28px] bg-black/30 backdrop-blur-lg  rounded-2xl shadow-2xl">
          {/* logo */}
          <div>
            <a
              href="/"
              className="flex justify-center items-center font-second font-normal text-primary leading-[20px] md:text-[24px] lg:text-[45px] md:leading-[32px] lg:font-medium  lg:leading-10 hover: cursor-pointer"
            >
              {" "}
              <span className="text-brand-1 "> {"<Rahat/> "} </span>
            </a>
          </div>
          <div className="flex items-center justify-between gap-14">
            {/* nav-list */}
            <ul className="flex items-center justify-between gap-x-[16px] md:gap-x-[32px]">
              <li className={`nav-list text-primary hover:cursor-pointer `}>
                <Link to="/">Home</Link>
              </li>
              <li className={`nav-list text-primary hover:cursor-pointer  `}>
                <a href="#project">Projects</a>
              </li>
              {/* <li className={`nav-list text-primary hover:cursor-pointer  `}>
                <Link to="/blog">Blog</Link>
              </li> */}
            </ul>
            {/* search */}
            {/* <div className="flex items-center bg-transparent lg:bg-primary rounded-full py-[6px] px-0 md:px-[16px] mx-[32px] 2xl:mx-[64px] ">
              <input
                type="text"
                name="search"
                className="outline-none hidden lg:block  "
              />
              <CiSearch className="w-[20px] h-[20px] text-primary lg:text-primary-bg hover:cursor-pointer " />
            </div> */}
            {/* social icon */}
            <ul className="hidden md:flex items-center justify-between gap-x-[32px]">
              <li className="nav-menu-social">
                <a
                  href="https://www.linkedin.com/in/rahat-hridoy"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <CiLinkedin className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">LinkdIn</span>
                </a>
              </li>
              <li className="nav-menu-social">
                <a
                  href="https://www.reddit.com/user/Big-Warthog2876/"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <RiRedditLine className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">Reddit</span>
                </a>
              </li>
              <li className="nav-menu-social">
                <a
                  href="https://github.com/Rahat-Hridoy"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <FaGithub className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">Git-Hub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
