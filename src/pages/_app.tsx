import ThemeContextWrapper from '@/themeProvider/themeContextWrapper';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/components.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextWrapper>
      <Component {...pageProps} />
    </ThemeContextWrapper>
  );
}

export default MyApp;
