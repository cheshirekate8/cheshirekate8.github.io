import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden	">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="mx-auto">{children}</main>
      <Header />
    </div>
  );
};

export default Layout;
