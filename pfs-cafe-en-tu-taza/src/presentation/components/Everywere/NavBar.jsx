import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className="relative w-full bg-[#221a11] dark"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#483623] px-4 sm:px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white" /></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Café En Tu Taza</h2>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-9">
            <a className="text-white text-sm font-medium leading-normal" href="/Coffee">Coffee</a>
            <a className="text-white text-sm font-medium leading-normal" href="/Community">Community</a>
            <a className="text-white text-sm font-medium leading-normal" href="/Contact">Contact</a>
            <a className="text-white text-sm font-medium leading-normal" href="/SignIn">Sign In</a>
          </nav>

          <div className="flex gap-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#483623] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Cart</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#483623] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div className="text-white" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#483623] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,88H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-[#221a11] border-b border-solid border-b-[#483623]">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><a className="text-white text-sm font-medium leading-normal" href="/Coffee">Coffee</a></li>
            <li><a className="text-white text-sm font-medium leading-normal" href="/Community">Community</a></li>
            <li><a className="text-white text-sm font-medium leading-normal" href="/Contact">Contact</a></li>
            <li><a className="text-white text-sm font-medium leading-normal" href="/SignIn">Sign In</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;