import { Link } from "react-router-dom";

const Navbar = () => {
  const ListItems = () => {
    return (
      <>
        <Link
          className="hover:bg-slate-800 hover:text-white p-3 rounded-lg lg:text-white"
          to="">
          <li>DESTINATIONS</li>
        </Link>
        <Link
          className="hover:bg-slate-800 hover:text-white p-3 rounded-lg lg:text-white"
          to="">
          <li>FOOD</li>
        </Link>
        <Link
          className="hover:bg-slate-800 hover:text-white p-3 rounded-lg lg:text-white"
          to="">
          <li>WELL BEING</li>
        </Link>
        <Link
          className="hover:bg-slate-800 hover:text-white p-3 rounded-lg lg:text-white"
          to="">
          <li>SPORT</li>
        </Link>
        <Link
          className="hover:bg-slate-800 hover:text-white p-3 rounded-lg lg:text-white"
          to="">
          <li>FAMILY</li>
        </Link>
        <Link
          className="hover:bg-slate-800 hover:text-white p-3 rounded-lg lg:text-white"
          to="">
          <li>LIFESTYLE</li>
        </Link>
      </>
    );
  };
  return (
    <div className="navbar bg-neutral ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
            <ListItems />
          </ul>
        </div>
        <a className="btn btn-ghost text-x text-white text-xl">Lonely Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 px-1">
          <ListItems />
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Login</a> */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-orange-400 rounded-btn">
            Dropdown
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <Link to='/newBlog'>Post a blog</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
