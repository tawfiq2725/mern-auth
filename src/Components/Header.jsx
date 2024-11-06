import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-yellow-400">
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto ">
          <Link to="/">
            <h1 className="font-bold">MERN-AUTH</h1>
          </Link>
          <ul className=" flex gap-7 ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/signin">
              <li>Sign-In</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;