import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const name = 'ASCSN'
export const siteTitle = 'Advanced Scientific Computing and Statistics Network'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="description"
          content="Welcome to the Advanced Scientific Computing and Statistics Network, where we foster collaborations and build connections in computational science, statistics, and applied mathematics."
        />
        <meta name="keywords" content="computational science, statistics, applied mathematics, scientific community, research, collaboration" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ascsn.net/" />
        <meta property="og:image" content="https://ascsn.net/images/profile.png" />
        <meta property="og:description" content="Welcome to the Advanced Scientific Computing and Statistics Network, where we foster collaborations and build connections in computational science, statistics, and applied mathematics." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Advanced Scientific Computing and Statistics Network",
            "url": "https://ascsn.net",
            "logo": "https://ascsn.net/images/profile.png",
            "sameAs": [
              "https://forum.ascsn.net",
              "https://github.com/ascsn",
              "https://www.youtube.com/@ASCSN-channel"
            ]
          }
          `}
        </script>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p className={styles.tagline}>Connecting Science and Innovation</p>
          </>
        ) : (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p className={styles.tagline}>Connecting Science and Innovation</p>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
