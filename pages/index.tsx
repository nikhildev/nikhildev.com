import Page from "components/Page";
import type { NextPage } from "next";
import Head from "next/head";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  return (
    <Page>
      <Intro />
    </Page>
  );
};

export default Home;
