import Navbar from "./Navbar";
import { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nikhil Dev Chunchu - Engineer, Musician, Doggy Daddy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Page;
