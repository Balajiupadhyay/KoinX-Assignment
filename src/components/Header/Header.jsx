import { useState } from 'react';
import logo from '/Logo.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-4">
      <div className="max-w-[100%]  flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-4" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-300">Crypto Taxes</a>
          <a href="#" className="text-black hover:text-gray-300">Free Tools</a>
          <a href="#" className="text-black hover:text-gray-300">Resource Center</a>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden ">
          <a href="#" className="block py-2 px-4 text-black hover:bg-gray-600">Crypto Taxes</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-gray-600">Free Tools</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-gray-600">Resource Center</a>
          <button className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
