import Head from "next/head";
import Subscribe from "../components/Subscribe";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Subscribe />
      </div>
    </div>
  );
}
