import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Sol Islands Gallery</title>
      
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;
