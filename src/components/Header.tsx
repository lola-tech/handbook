import { useTheme } from '@/themeProvider/themeContext';
import Image from 'next/image';

const Header = () => {
  const { theme, changeTheme } = useTheme();
  const handleToggle = (event: any) => {
    changeTheme(event.target.checked ? 'dark' : 'light');
  };

  return (
    <>
      <div className="header-button">
        <div>
          <form action="#">
            <label className="switch">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={handleToggle}
              />
              <span className={theme === 'dark' ? 'slider sun' : 'slider moon'}>
                <Image
                  src={theme === 'dark' ? '/icons/sun.svg' : '/icons/moon.svg'}
                  alt={theme === 'dark' ? 'sun' : 'moon'}
                  width={20}
                  height={20}
                />
              </span>
            </label>
          </form>
        </div>
        <a href="admin.html" className="cms-button">
          Use our CMS
        </a>
      </div>

      <div className="header">
        <div className="header-content">
          <h1 className="header-text">Welcome to the </h1>
          <Image
            src={theme === 'dark' ? '/lola-logo-white.svg' : '/lola-logo.svg'}
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
