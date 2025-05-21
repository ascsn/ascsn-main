import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import { useState, useEffect } from 'react' // Import useState and useEffect

const name = 'ASCSN'
export const siteTitle = 'Advanced Scientific Computing and Statistics Network'

export default function Layout({ children, home }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked (optional, good for SPA feel)
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);


  return (
    <>
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
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link href="/">
            <a onClick={handleLinkClick}>
              <Image
                priority
                src="/images/profile.png" // Replace with actual logo if available
                height={40}
                width={40}
                alt={name}
              />
              <span className={styles.navbarName}>{name}</span>
            </a>
          </Link>
        </div>
        <ul className={`${styles.navbarNav} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}><Link href="/"><a onClick={handleLinkClick}>Home</a></Link></li>
          <li className={styles.navItem}><Link href="/#about"><a onClick={handleLinkClick}>About</a></Link></li>
          <li className={styles.navItem}><a href="https://forum.ascsn.net" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Community</a></li>
          <li className={styles.navItem}><Link href="/#resources"><a onClick={handleLinkClick}>Resources</a></Link></li>
          <li className={styles.navItem}><Link href="/news"><a onClick={handleLinkClick}>News</a></Link></li>
          <li className={styles.navItem}><Link href="/#blog-highlights"><a onClick={handleLinkClick}>Blog</a></Link></li>
        </ul>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </nav>

      <div className={styles.container}>
        {home && (
          <header className={styles.header}>
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
          </header>
        )}
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </>
  )
}
