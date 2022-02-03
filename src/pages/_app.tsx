import type { AppProps /*, AppContext */ } from 'next/app';
import '@picocss/pico/css/pico.min.css';
import '../theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
