import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useRouter } from 'next/router';
import customStyles from '../styles/custom.module.css'

export default function Home({ allPostsData }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {
        currentUrl.indexOf("DNP2024") > -1 ? DNP() : null
      }
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to the <strong>Advanced Scientific Computing and Statistics Network</strong> landing
          page! The primary purpose of <strong>ASCSN</strong> is to
          foster collaborations and build connections between those that are
          pursuing technical developments in computational science, statistics, and applied mathematics
          and the various application domains that stand to benefit from that development. Additionally,
          we are committed to providing resources and support to the broader scientific community to
          promote accessibility and lower the barrier to get involved with cutting edge research.
        </p>
        <p>
          Join us in our mission to advance scientific computing and statistics. Explore our resources, participate in our forums, and connect with like-minded individuals to drive innovation and discovery.
        </p>

      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Community Platforms</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href='https://forum.ascsn.net'>
              Forum
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href='https://github.com/ascsn'>
              GitHub
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href='https://www.youtube.com/@ASCSN-channel'>
              YouTube
            </Link>
          </li>
        </ul>
        <h2 className={utilStyles.headingLg}>Educational Resources</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href='https://dr.ascsn.net'>
              Dimensionality Reduction Book
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href='https://qc.ascsn.net'>
              Quantum Computing Book
            </Link>
          </li>
        </ul>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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

function DNP() {
  return (
      <section className={customStyles.dnpbox}>
        <h1>Welcome DNP Visitors!</h1>
        <p>
          This page is a special landing page for visitors to the 2024 Division of Nuclear Physics
          meeting. The forum link to the discussion board for the meeting is <a href="https://forum.ascsn.net/t/about-the-lifting-the-shadows-category/309">here</a>.
        </p>
        <p>
          We are excited to have you join us and explore the various resources and discussions available. Feel free to participate in the forums, ask questions, and connect with other attendees.
        </p>
        <p>
          Don't forget to check out our <a href="https://ascsn.net/resources">resources page</a> for more information and materials related to the conference.
        </p>
        <p>
          Additionally, you can find the schedule of events and important announcements on our <a href="https://ascsn.net/events">events page</a>.
        </p>
      </section>
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
