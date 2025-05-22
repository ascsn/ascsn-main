import Link from 'next/link';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>ASCSN</h3>
            <p>
              The Advanced Scientific Computing and Statistics Network connects researchers
              and innovators in computational science, statistics, and applied mathematics.
            </p>
          </div>
          
          <div className={styles.column}>
            <h3>Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#resources">Resources</Link></li>
              <li><Link href="/news">News</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>Resources</h3>
            <ul className={styles.linkList}>
              <li><a href="https://dr.ascsn.net" target="_blank" rel="noopener noreferrer">Dimensionality Reduction</a></li>
              <li><a href="https://qc.ascsn.net" target="_blank" rel="noopener noreferrer">Quantum Computing</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>Connect</h3>
            <div className={styles.socialLinks}>
              <a href="https://forum.ascsn.net" target="_blank" rel="noopener noreferrer" aria-label="Community Forum">
                <FontAwesomeIcon icon={faComments} />
              </a>
              <a href="https://github.com/ascsn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.youtube.com/@ASCSN-channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Advanced Scientific Computing and Statistics Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
