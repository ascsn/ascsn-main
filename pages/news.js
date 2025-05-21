import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedNewsData } from '../lib/news'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import customStyles from '../styles/custom.module.css' // Optional: for custom styling

export async function getStaticProps() {
  const allNewsData = getSortedNewsData()
  return {
    props: {
      allNewsData
    }
  }
}

export default function NewsPage({ allNewsData }) {
  return (
    <Layout>
      <Head>
        <title>News Updates - {siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>News Updates</h1>
        <ul className={utilStyles.list}>
          {allNewsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} ${customStyles.newsListItem}`} key={id}>
              <Link href={`/news/${id}`}>
                <a>
                  <h3 className={customStyles.newsTitle}>{title}</h3>
                </a>
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
