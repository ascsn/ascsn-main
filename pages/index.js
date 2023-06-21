import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to the <strong>Advanced Scientific Computing and Statistics Network</strong> landing
          page! The primary purpose of <strong>ASCSN</strong> is to
          foster collaborations and build connections between those that are
          pursuing technical developments in computational science, statistics, and applied mathematics
          and the various application domains that stand to benefit from that development.
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>ASCSN Resources | </h2>
        <Link href='https://forum.ascsn.net'>Forum</Link> | <Link href='https://github.com/ascsn'>GitHub</Link>
        {/* <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href='https://forum.ascsn.net'>Forum</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href='https://github.com/ascsn'>GitHub</Link>
          </li>
        </ul> */}
        <h2 className={utilStyles.headingLg}>Blog |</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
