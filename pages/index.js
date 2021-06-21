import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mcgaunn.com - my website</title>
        <meta name="description" content="mcgaunn.com - eat fresh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to <a href="https://mcgaunn.com">ian mcgaunn&rsquo;s</a> website
        </h3>
      </main>

      <p> if you are interested in any of my software tinkering, I host a lot of my work in these few places: </p>
      <Link href="https://git.sr.ht/~imcg">
        <a className={styles.card}>sr.ht</a>
      </Link>
      <Link href="https://github.com/imcgaunn/">
        <a className={styles.card}>github</a>
      </Link>
      <footer className={styles.footer}>
        <p> wanna see some pictures of
          <Link href="/weezygallery">
            <a className={styles.weezylink}>weezy the dog? 🐶</a>
          </Link>
        </p>
      </footer>
    </div>
  )
}
