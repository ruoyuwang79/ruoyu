import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function Gallery() {
  const images = [
    {image: "/photos/self_2019_1.jpg", imageName: "2019", width: 500, height: 667},
    {image: "/photos/self_2016_1.jpg", imageName: "2016", width: 531, height: 800},
    {image: "/photos/self_2016_2.jpg", imageName: "2016", width: 800, height: 531},
    {image: "/photos/self_2016_3.jpg", imageName: "2016", width: 800, height: 533},
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Ruoyu</title>
        <meta name="description" content="Gallery" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gallery!
        </h1>

        {images.map((image) => (
          <BlurImage key={image.image} image={image} />
          ))}
      </main>

      <footer className={styles.footer}>
        <p>Ruoyu</p>
      </footer>
    </div>
  );
}

function BlurImage({ image }) {
  return (
    <>
      <div className={styles.blurImage}>
        <Image
          src={image.image}
          width={image.width}
          height={image.height}
        />
        <h2>{image.imageName}</h2>
      </div>
    </>
  );
}
