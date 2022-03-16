import { useEffect, useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <>
      <div className="header-button">
        <div>
          {darkTheme !== undefined && (
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form>
          )}
        </div>
        <a href="admin.html" className="cms-button">
          Use our CMS
        </a>
      </div>

      <div className="header">
        <div className="header-content">
          <h1 className="header-text">Welcome to the </h1>
          <Image
            src={darkTheme ? '/lola-logo-white.svg' : '/lola-logo.svg'}
            className="header-content"
            alt="Lola logo"
            width={266}
            height={50}
          />
          <h1 className="header-text">Staff Handbook</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
