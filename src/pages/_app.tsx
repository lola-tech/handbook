import type { AppProps /*, AppContext */ } from 'next/app';
import '@picocss/pico/css/pico.min.css';
import '../styles/components.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
