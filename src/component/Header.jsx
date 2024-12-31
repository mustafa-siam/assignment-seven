
const Header = () => {
    return (
        <div>
            <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <h2 className="md:text-3xl text-2xl font-bold">MetroRecipe</h2>
  </div>
  <div className="navbar bg-base-100">
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
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li>
        <details>
          <summary>Racipies</summary>
          <ul className="p-2">
            <li><a>Deshi</a></li>
            <li><a>Italian</a></li>
          </ul>
        </details>
      </li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Racipies</summary>
          <ul className="p-2">
            <li><a>Deshi</a></li>
            <li><a>Italian</a></li>
          </ul>
        </details>
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="profile img"
            src="/image/profile.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
            </div>
            <div className="my-10 text-white">
            <div className="bg-[url('/image/banner.png')] bg-no-repeat bg-cover bg-center min-h-screen  rounded-[32px] overflow-hidden flex flex-col justify-center items-center space-y-7">
            
            <h2 className="text-center md:text-5xl text-4xl font-bold">Discover an exceptional cooking <br />class tailored for you!</h2>
            <p className="text-center text-lg font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex justify-center gap-8">
                <button className="bg-[#0BE58A] text-black py-4 px-7 rounded-[50px]">Explore Now</button>
                <button className="border-2 border-r-slate-100 py-4 px-7 rounded-[50px]">Our Feedback</button>
            </div>    
            </div>
            </div>
            <div className="text-center space-y-6 my-10">
                <h2 className="text-4xl font-semibold">Our Recipes</h2>
                <p className=" text-lg font-normal">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
        </div>
    );
};

export default Header;