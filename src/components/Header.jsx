import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.svg";
import hamburgerIcon from "../assets/hamburger.svg";
import profileIcon from "../assets/profile.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menüyü kapatmak için boşluğa tıklama veya 'Esc' tuşu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".mobile-menu")) {
        setMenuOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (menuOpen && event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [menuOpen]);

  return (
    <header className="bg-white shadow-sm py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Tripkolic Logo" className="h-8 w-auto" />
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="block lg:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex space-x-8 font-poppins">
          <a
            href="/"
            className="text-gray-600 text-lg hover:text-yellow-600 hover:scale-110 transform transition duration-200"
          >
            Home
          </a>
          <a
            href="/"
            className="text-gray-600 text-lg hover:text-yellow-600 hover:scale-110 transform transition duration-200"
          >
            Tours
          </a>
        </nav>

        {/* Sağ Taraf - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Sepet İkonu */}
          <button className="text-gray-600">
            <img src={hamburgerIcon} alt="Menu" className="h-8 w-8" />
          </button>

          {/* Profil ve Menü Alanı */}
          <div className="relative flex items-center justify-center p-2 bg-white rounded-full shadow-md border border-gray-200">
            {/* Menü ve Profil İkonları */}
            <div className="flex items-center space-x-2">
              {/* Menü İkonu (Hamburger) */}
              <img src={cartIcon} alt="Cart" className="h-4 w-4" />

              {/* Profil İkonu */}
              <img src={profileIcon} alt="Profile" className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } mobile-menu absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Kapatma Butonu */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <a
          href="/"
          className="text-gray-600 text-xl hover:text-yellow-600 hover:scale-110 transform transition duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="/"
          className="text-gray-600 text-xl hover:text-yellow-600 hover:scale-110 transform transition duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Tours
        </a>
      </div>
    </header>
  );
};

export default Header;
