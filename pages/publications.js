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
            <h2>2023</h2>
            <Link href="https://pubs.aip.org/asa/jasa/article/153/3_supplement/A345/2886474/Exploring-propagation-delay-and-mobility-in">
                <p><b>Ruoyu Wang</b>, Yahong Rosa Zheng. &Prime;Exploring propagation delay and mobility in underwater acoustic networks&Prime;</p>
                <p>In The Journal of the Acoustical Society of America 153 (3_supplement), A345-A345.</p>
            </Link>
            
            <h2>2022</h2>
            <Link href="https://dl.acm.org/doi/abs/10.1145/3567600.3569543">
                <p>Xiyuan Zhu, Fengyi Sun, <b>Ruoyu Wang</b>, and Yahong Rosa Zheng. &Prime;Demo: Underwater Video Transmission Through Acoustic Communication Links&Prime;</p>
                <p>In WUWNet 2022.</p>
            </Link>

            <h2>2019</h2>
            <Link href="https://ieeexplore.ieee.org/abstract/document/8983491">
                <p>Ma Yu, Dingcheng Jia, Huifan Zhang, <b>Ruoyu Wang</b>, and Pingqiang Zhou. &Prime;A Compact Memory Structure based on 2T1R Against Single-Event Upset in RRAM Arrays.&Prime;</p>
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
