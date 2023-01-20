import type { AppProps } from 'next/app';
import '../components/card/card.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
