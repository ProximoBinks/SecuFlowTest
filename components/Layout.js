// components/Layout.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Layout({ children, title = "Dashboard", description = "Security Dashboard" }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-[60px] xl:pt-[95px] flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}
