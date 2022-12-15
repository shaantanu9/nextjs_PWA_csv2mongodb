import Head from "next/head";
import { Provider } from "react-redux";
import { Footer, Navbar } from "../components";
import store from "../redux/store";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>

      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
<script async type="module" src="app.js"></script>;
export default MyApp;
