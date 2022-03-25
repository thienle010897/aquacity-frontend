import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Aqua1 from "../components/aqua1/Aqua1";
import Aqua2 from "../components/aqua2/Aqua2";

export default function Home() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      overFlow: "hidden"
    }}>
      <Head>
        <title>Aqua City</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aqua1 />
      <Aqua2 />
    </div>
  );
}
