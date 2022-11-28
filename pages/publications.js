import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Publications() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ruoyu</title>
        <meta name="description" content="Publications" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Publications
        </h1>

        <div className={styles.publication}>
            <h2>2022</h2>
            <p>Xiyuan Zhu, Fengyi Sun, <b>Ruoyu Wang</b>, and Yahong Rosa Zheng. "Demo: Underwater Video Transmission Through Acoustic Communication Links"</p>
            <p>In WUWNet 2022.</p>
            <h2>2019</h2>
            <Link href="https://ieeexplore.ieee.org/abstract/document/8983491">
                <p>Ma Yu, Dingcheng Jia, Huifan Zhang, <b>Ruoyu Wang</b>, and Pingqiang Zhou. "A Compact Memory Structure based on 2T1R Against Single-Event Upset in RRAM Arrays."</p>
                <p>In 2019 IEEE 13th International Conference on ASIC (ASICON), pp. 1-4. IEEE, 2019.</p>
            </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Ruoyu</p>
      </footer>
    </div>
  );
}
