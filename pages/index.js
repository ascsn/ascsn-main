import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedNewsData } from '../lib/news'
import Link from 'next/link'
import Date from '../components/date'
import { useRouter } from 'next/router';
import customStyles from '../styles/custom.module.css'

export default function Home({ latestNewsData }) {
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
      {/* Hero Section (handled by Layout component with 'home' prop) */}
      {/* Introductory text below hero - refined */}
      <section className={`${utilStyles.headingMd} ${customStyles.introText}`}>
        <p>
          The <strong>Advanced Scientific Computing and Statistics Network (ASCSN)</strong> unites researchers and innovators
          to advance computational science, statistics, and applied mathematics. Our mission is to foster collaboration,
          develop cutting-edge tools, and make these advancements accessible to the wider scientific community.
        </p>
      </section>

      {/* About Us Section */}
      <section id="about" className={`${customStyles.sectionContainer} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Our Mission</h2>
        <p>
          ASCSN is dedicated to bridging the gap between theoretical breakthroughs and real-world applications.
          We cultivate a vibrant ecosystem where method developers collaborate with domain experts,
          transforming novel computational and statistical approaches into tools for groundbreaking research.
        </p>
        <p>
          We are committed to empowering scientists and engineers by providing essential resources,
          promoting open discussions, and supporting our members in their pursuit of scientific and technological discovery.
        </p>
      </section>

      {/* Our Platforms Section */}
      <section id="platforms" className={`${customStyles.sectionContainer} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Our Platforms</h2>
        <div className={customStyles.grid}>
          <Link href='https://forum.ascsn.net'>
            <a className={customStyles.card} target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-comments fa-2x"></i>
              <h3>Community Forum &rarr;</h3>
              <p>Engage in discussions, ask questions, and share knowledge.</p>
            </a>
          </Link>
          <Link href='https://github.com/ascsn'>
            <a className={customStyles.card} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
              <h3>GitHub Organization &rarr;</h3>
              <p>Explore our open-source projects and contribute to development.</p>
            </a>
          </Link>
          <Link href='https://www.youtube.com/@ASCSN-channel'>
            <a className={customStyles.card} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
              <h3>YouTube Channel &rarr;</h3>
              <p>Watch tutorials, webinars, and talks from our community.</p>
            </a>
          </Link>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section id="resources" className={`${customStyles.sectionContainer} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Educational Resources</h2>
        <div className={customStyles.grid}>
          <Link href='https://dr.ascsn.net'>
            <a className={customStyles.card} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-chart-line fa-2x"></i>
              <h3>Dimensionality Reduction &rarr;</h3>
              <p>An interactive book on dimensionality reduction techniques.</p>
            </a>
          </Link>
          <Link href='https://qc.ascsn.net'>
            <a className={customStyles.card} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-atom fa-2x"></i>
              <h3>Quantum Computing &rarr;</h3>
              <p>Explore the fundamentals of quantum computing with our guide.</p>
            </a>
          </Link>
        </div>
      </section>

      {/* Call to Action / Get Involved Section */}
      <section id="get-involved" className={`${customStyles.sectionContainer} ${customStyles.ctaSection} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Connect with ASCSN</h2>
        <p>
          Join a growing network of researchers, developers, and enthusiasts.
          Participate in our <Link href="https://forum.ascsn.net"><a>Community Forum</a></Link>,
          contribute on <Link href="https://github.com/ascsn"><a>GitHub</a></Link>, or explore our resources.
          Let's advance scientific computing together!
        </p>
        <div className={customStyles.ctaButtonContainer}>
          <Link href="https://forum.ascsn.net/signup">
            <a className={customStyles.ctaButton} target="_blank" rel="noopener noreferrer">Join the Discussion</a>
          </Link>
        </div>
      </section>

      {/* News Highlights Section */}
      <section id="news-highlights" className={`${customStyles.sectionContainer} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest News</h2>
        <ul className={`${utilStyles.list} ${customStyles.newsList}`}>
          {latestNewsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} ${customStyles.newsListItem}`} key={id}>
              <Link href={`/news/${id}`}>
                <a>
                  <h3 className={customStyles.newsTitle}>{title}</h3>
                </a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              {/* Optional: Add a short snippet/excerpt here later */}
            </li>
          ))}
        </ul>
        <div className={customStyles.viewAllButtonContainer}>
          <Link href="/news">
            <a className={customStyles.ctaButton}>View All News</a>
          </Link>
        </div>
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
        meeting. The forum link to the discussion board for the meeting is <a href="https://forum.ascsn.net/t/about-the-lifting-the-shadows-category/309" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <p>
        We are excited to have you join us and explore the various resources and discussions available. Feel free to participate in the forums, ask questions, and connect with other attendees.
      </p>
      <p>
        Don't forget to check out our <a href="https://ascsn.net/resources" target="_blank" rel="noopener noreferrer">resources page</a> for more information and materials related to the conference.
      </p>
      <p>
        Additionally, you can find the schedule of events and important announcements on our <a href="https://ascsn.net/events" target="_blank" rel="noopener noreferrer">events page</a>.
      </p>
    </section>
  )
}

export async function getStaticProps() {
  const allNewsData = getSortedNewsData() // Fetch all news data
  const latestNewsData = allNewsData.slice(0, 3) // Get the latest 3 news items

  return {
    props: {
      latestNewsData // Pass latest news data to props
    }
  }
}
