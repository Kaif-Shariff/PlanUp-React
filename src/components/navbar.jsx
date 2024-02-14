import { useState, useEffect } from "react";
import logo from "../assets/logoLight.svg";
import logoDark from "../assets/logoDark.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0F000F";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#FEF0FF";
    }
    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);

  const handleThemeChange = (e) => {
    setIsDarkMode(e.target.checked);
  };

  // check if a theme is already applied
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "true") {
      document.getElementById("toggle").checked = true;
    } else {
      document.getElementById("toggle").checked = false;
    }
  }, []);

  return (
    <>
      <nav className="sticky w-screen top-0 py-4 px-2 z-50 bg-lightestPurple dark:bg-ultraDarkPurple flex items-center justify-between">
        <Link to="/">
          <img
            className="dark:hidden cursor-pointer ml-4 sm:ml-9"
            src={logo}
            alt="Logo"
            id="logoImg"
          />
          <img
            className="hidden dark:block cursor-pointer ml-4 sm:ml-9"
            src={logoDark}
            alt="Logo"
            id="logoImg"
          />
        </Link>

        <div
          className="w-20 h-6 mr-2 flex justify-center items-center sm:mr-10"
          title="Switch between Light & Dark Theme"
        >
          <label
            className="relative inline-flex items-center cursor-pointer"
            id="themeToggleBtn"
          >
            <input
              type="checkbox"
              className="sr-only peer"
              id="toggle"
              onClick={handleThemeChange}
            />
            <div className="w-11 h-6 bg-lightPurple rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-deepPurple"></div>
          </label>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
