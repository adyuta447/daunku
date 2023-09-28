// react-scroll
import { Link } from "react-scroll";

const NavLink = ({ children, to, offset = -50, mobileMenu = false }) => {
  const className = mobileMenu
    ? "text-lg text-black hover:text-black cursor-pointer w-full text-center"
    : "text-lg lg:text-xl hover:text-black text-white cursor-pointer hover:bg-clip-text";

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      className={className}
    >
      {children}
    </Link>
  );
};

export default NavLink;
