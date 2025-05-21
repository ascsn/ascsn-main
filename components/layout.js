import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faComments, faBook } from '@fortawesome/free-solid-svg-icons'
import Footer from './footer'

const name = 'ASCSN'
export const siteTitle = 'Advanced Scientific Computing and Statistics Network'

export default function Layout({ children, home }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when a link is clicked
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
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navbarBrand}>
          <Link href="/" onClick={handleLinkClick}>
            <Image
              priority
              src="/images/profile.png"
              height={40}
              width={40}
              alt={name}
            />
            <span className={styles.navbarName}>{name}</span>
          </Link>
        </div>
        <ul className={`${styles.navbarNav} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}><Link href="/" onClick={handleLinkClick}>Home</Link></li>
          <li className={styles.navItem}><Link href="/#about" onClick={handleLinkClick}>About</Link></li>
          <li className={styles.navItem}><a href="https://forum.ascsn.net" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Community</a></li>
          <li className={styles.navItem}><Link href="/#resources" onClick={handleLinkClick}>Resources</Link></li>
          <li className={styles.navItem}><Link href="/news" onClick={handleLinkClick}>News</Link></li>
        </ul>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>

      <div className={styles.container}>
        {home && (
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={160}
                width={160}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <p className={styles.tagline}>Connecting Science and Innovation</p>
              <div className={styles.headerDivider}></div>
              <p className={styles.headerDescription}>
                A global community of researchers advancing the frontiers of computational science, 
                statistics, and applied mathematics through collaboration.
              </p>
              <div className={styles.headerButtons}>
                <a href="https://forum.ascsn.net" className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faComments} /> Join the Community
                </a>
                <Link href="/#resources" className={styles.secondaryButton}>
                  <FontAwesomeIcon icon={faBook} /> Explore Resources
                </Link>
              </div>
            </div>
            <div className={styles.headerVisual}>
              <div className={styles.shape1}></div>
              <div className={styles.shape2}></div>
              <div className={styles.shape3}></div>
            </div>
          </header>
        )}
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              ← Back to home
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
