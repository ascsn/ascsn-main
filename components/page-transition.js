import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './page-transition.module.css';

export default function PageTransition({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      // Only trigger animation if it's a page change, not just a hash change
      if (url !== router.asPath && !url.startsWith(`${router.asPath}#`)) {
        setLoading(true);
      }
    };
    
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && (
        <div className={styles.loadingOverlay} aria-live="assertive" aria-label="Loading, please wait">
          <div className={styles.loadingSpinner}>
            <div className={styles.spinnerRing}></div>
            <div className={styles.spinnerLogo}>ASCSN</div>
          </div>
        </div>
      )}
      <div className={loading ? styles.contentLoading : styles.content}>
        {children}
      </div>
    </>
  );
}
