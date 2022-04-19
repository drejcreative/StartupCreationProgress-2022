import Head from "next/head";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>App Name</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="DEscription" />
        <meta name="keywords" content="JS" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>{children}</>
    </>
  );
}

export default Layout;
