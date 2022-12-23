import type { AppProps } from 'next/app';
import Script from "next/script";
import Head from "next/head";
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
    <Head> 
        <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
    </Head>
    <Script
      id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

    <Component {...pageProps} />
    </>
  ) 
}