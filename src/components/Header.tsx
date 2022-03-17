import Image from 'next/image';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <h1 className="header-text">Welcome to the </h1>
      <Image
        src="/lola-logo.svg"
        className="header-content"
        alt="Lola logo"
        width={266}
        height={50}
      />
      <h1 className="header-text">Staff Handbook</h1>
    </div>
    <div className="header-button">
      <a href="admin.html" className="cms-button">
        Use our CMS
      </a>
    </div>
  </div>
);

export default Header;
