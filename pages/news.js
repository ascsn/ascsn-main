import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedNewsData } from '../lib/news'
import Link from 'next/link'
import Date from '../components/date'
import { useEffect } from 'react' 
import utilStyles from '../styles/utils.module.css'
import customStyles from '../styles/custom.module.css'
import sectionStyles from '../styles/section-headings.module.css'
import animationStyles from '../styles/animations.module.css'
import { initScrollAnimations } from '../lib/animation'

export async function getStaticProps() {
  const allNewsData = getSortedNewsData().map(news => ({
    ...news,
  }));
  return {
    props: {
      allNewsData
    },
    // Re-generate the page at most once every 60 seconds
    revalidate: 60
  }
}

export default function NewsPage({ allNewsData }) {
  // Initialize scroll animations
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <Layout>
      <Head>
        <title>News Updates - {siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${sectionStyles.decoratedSection} ${animationStyles.waveEffect}`}>
        <h1 className={`${sectionStyles.sectionHeading} ${animationStyles.gradientText}`}>News Updates</h1>
        <ul className={`${utilStyles.list} ${customStyles.newsList} ${sectionStyles.fadeIn}`}>
          {allNewsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} ${customStyles.newsListItem} ${animationStyles.scaleOnHover}`} key={id}>
              <Link href={`/news/${id}`}>
                <h3 className={customStyles.newsTitle}>{title}</h3>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
