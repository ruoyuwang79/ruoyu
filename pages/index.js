import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ruoyu</title>
        <meta name="description" content="Ruoyu &apos;s Personal Page" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Ruoyu Wang &apos;s Personal Page!
        </h1>

        <p className={styles.description}>
          3rd-year Ph.D. Student, Computer Engineering, Electrical Computer Engineering Department, Lehigh University
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ruoyuwang79" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Explore my projects</p>
          </a>

          <Link href="/gallery" className={styles.card}>
            <h2>Gallery &rarr;</h2>
            <p>Explore my photos</p>
          </Link>

          <Link href="/files/RuoyuWang_resume_2022Fall.pdf" className={styles.card}>
            <h2>Resume &rarr;</h2>
            <p>My CV</p>
            <p>(Last Edited: Aug. 2022)</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Ruoyu</p>
      </footer>
    </div>
  );
}
