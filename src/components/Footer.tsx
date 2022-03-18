import { useTheme } from '@/themeProvider/themeContext';

const Footer = () => {
  let footerStyle: string;
  const { theme } = useTheme();
  footerStyle = theme === 'dark' ? 'footer footer-dark' : 'footer';

  return <div className={footerStyle}>🎬</div>;
};

export default Footer;
