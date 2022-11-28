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
          <Link href="/publications" className={styles.card}>
            <h2>Publications &rarr;</h2>
            <p>Explore my publications</p>
          </Link>

          <Link href="/files/RuoyuWang_resume_2022Fall.pdf" className={styles.card}>
            <h2>Resume &rarr;</h2>
            <p>Last Edited: Aug. 2022</p>
          </Link>

          <Link href="/gallery" className={styles.card}>
            <h2>Gallery &rarr;</h2>
            <p>Explore my photos</p>
          </Link>

          <a href="https://github.com/ruoyuwang79" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Explore past projects</p>
          </a>
        </div>

        <div className={styles.about}>
          <h2>About</h2>
          <p>
            Ruoyu Wang is a 3rd-year Ph.D. student who majored in Computer Engineering at Lehigh University.
          </p>
          <h2>Research interests</h2>
          <p>&bull; Machine Learning</p>
          <p>&bull; Computer Architecture</p>
          <p>&bull; Underwater Communication</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Ruoyu</p>
      </footer>
    </div>
  );
}
