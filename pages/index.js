import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ruoyu</title>
        <meta name="description" content="Ruoyu's Personal Page" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Ruoyu Wang's Personal Page!
        </h1>

        <p className={styles.description}>
          3rd-year Ph.D. Student, Computer Engineering, Electrical Computer Engineering Department, Lehigh University
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ruoyuwang79" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Explore my projects</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>Ruoyu</a>
      </footer>
    </div>
  );
}
