import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
  const ListItems = () => {
    return (
      <>
        <Link
          className="hover:bg-white hover:text-black p-3  lg:text-white"
          to="">
          <li>Programming</li>
        </Link>
        <Link
          className="hover:bg-white hover:text-black p-3  lg:text-white"
          to="">
          <li>Foods</li>
        </Link>
        <Link
          className="hover:bg-white hover:text-black p-3  lg:text-white"
          to="">
          <li>Gaming</li>
        </Link>
        <Link
          className="hover:bg-white hover:text-black p-3  lg:text-white"
          to="">
          <li>Movies</li>
        </Link>
        <Link
          className="hover:bg-white hover:text-black p-3  lg:text-white"
          to="">
          <li>Traveling</li>
        </Link>
      </>
    );
  };
  return (
    <div className="navbar bg-[#121416] ">
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
        <div className="dropdown dropdown-end">
          <Button tabIndex={0} role="button" text="button" />
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("signInModal").showModal()
                }>
                Sign In
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("signUpModal").showModal()
                }>
                Sign Up
              </button>
            </li>
            <li>
              <Link to="/newBlog">Post a blog</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* modals */}
      <SignInModal />
      <SignUpModal />
    </div>
  );
};

export default Navbar;

// this is sign in modal
const SignInModal = () => {
  return (
    <dialog id="signInModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello from SignIn!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form  className="space-y-4">
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <input type="password" placeholder="Password" className="input input-bordered w-full" />

            <button className="btn w-full">SignIn</button>
            
            <div className="space-y-4">
              <p className="text-center">or, continue with</p>
              <button className="btn btn-primary w-full">Google</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};


// this is sign up modal
const SignUpModal = () => {
  return (
    <dialog id="signUpModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello from SignUp!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form className="space-y-4">
            {/* if there is a button in form, it will close the modal */}
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <input type="password" placeholder="Password" className="input input-bordered w-full" />

            <button className="btn w-full">SignUp</button>
            
            <div className="space-y-4">
              <p className="text-center">or, continue with</p>
              <button className="btn btn-primary w-full">Google</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
