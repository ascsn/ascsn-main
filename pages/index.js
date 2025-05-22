import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedNewsData } from '../lib/news'
import Link from 'next/link'
import Date from '../components/date'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import customStyles from '../styles/custom.module.css'
import sectionStyles from '../styles/section-headings.module.css'
import animationStyles from '../styles/animations.module.css'
import { initScrollAnimations } from '../lib/animation'

export default function Home({ latestNewsData }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  // Initialize scroll animations
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

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
      <section className={`${utilStyles.headingMd} ${customStyles.introText} ${sectionStyles.fadeIn} ${sectionStyles.fadeDelay1}`}>
        <p>
          The <strong>Advanced Scientific Computing and Statistics Network (ASCSN)</strong> unites researchers and innovators
          to advance computational science, statistics, and applied mathematics. Our mission is to foster collaboration,
          develop cutting-edge tools, and make these advancements accessible to the wider scientific community.
        </p>
      </section>

      {/* About Us Section */}
      <section id="about" className={`${customStyles.sectionContainer} ${sectionStyles.decoratedSection} ${utilStyles.padding1px}`}>
        <h2 className={sectionStyles.sectionHeading}>Our Mission</h2>
        <div className={`${sectionStyles.fadeIn} ${sectionStyles.fadeDelay1}`}>
          <p>
            ASCSN is dedicated to bridging the gap between theoretical breakthroughs and real-world applications.
            We cultivate a vibrant ecosystem where method developers collaborate with domain experts,
            transforming novel computational and statistical approaches into tools for groundbreaking research.
          </p>
          <p>
            We are committed to empowering scientists and engineers by providing essential resources,
            promoting open discussions, and supporting our members in their pursuit of scientific and technological discovery.
          </p>
        </div>
      </section>

      {/* Our Platforms Section */}
      <section id="platforms" className={`${customStyles.sectionContainer} ${utilStyles.padding1px}`}>
        <h2 className={sectionStyles.sectionHeading}>Our Platforms</h2>
        <div className={`${customStyles.grid} ${sectionStyles.fadeIn} ${sectionStyles.fadeDelay2}`}>
          <a href='https://forum.ascsn.net' className={`${customStyles.card} ${animationStyles.scaleOnHover}`} target="_blank" rel="noopener noreferrer">
            <i className={`fa-regular fa-comments fa-2x ${animationStyles.pulseEffect}`}></i>
            <h3>Community Forum <span className={animationStyles.gradientText}>&rarr;</span></h3>
            <p>Engage in discussions, ask questions, and share knowledge.</p>
          </a>
          <a href='https://github.com/ascsn' className={`${customStyles.card} ${animationStyles.scaleOnHover}`} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-github fa-2x ${animationStyles.pulseEffect}`}></i>
            <h3>GitHub Organization <span className={animationStyles.gradientText}>&rarr;</span></h3>
            <p>Explore our open-source projects and contribute to development.</p>
          </a>
          <a href='https://www.youtube.com/@ASCSN-channel' className={`${customStyles.card} ${animationStyles.scaleOnHover}`} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-youtube fa-2x ${animationStyles.pulseEffect}`}></i>
            <h3>YouTube Channel <span className={animationStyles.gradientText}>&rarr;</span></h3>
            <p>Watch tutorials, webinars, and talks from our community.</p>
          </a>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section id="resources" className={`${customStyles.sectionContainer} ${sectionStyles.decoratedSection} ${animationStyles.waveEffect} ${utilStyles.padding1px}`}>
        <h2 className={sectionStyles.sectionHeading}>Educational Resources</h2>
        <div className={`${customStyles.grid} ${sectionStyles.fadeIn} ${sectionStyles.fadeDelay2}`}>
          <a href='https://dr.ascsn.net' className={`${customStyles.card} ${animationStyles.scaleOnHover}`} target="_blank" rel="noopener noreferrer">
            <i className={`fa-solid fa-chart-line fa-2x ${animationStyles.floatEffect}`}></i>
            <h3>Dimensionality Reduction <span className={animationStyles.gradientText}>&rarr;</span></h3>
            <p>An interactive book on dimensionality reduction techniques.</p>
          </a>
          <a href='https://qc.ascsn.net' className={`${customStyles.card} ${animationStyles.scaleOnHover}`} target="_blank" rel="noopener noreferrer">
            <i className={`fa-solid fa-atom fa-2x ${animationStyles.floatEffect}`}></i>
            <h3>Quantum Computing <span className={animationStyles.gradientText}>&rarr;</span></h3>
            <p>Explore the fundamentals of quantum computing with our guide.</p>
          </a>
        </div>
      </section>

      {/* Call to Action / Get Involved Section */}
      <section id="get-involved" className={`${customStyles.sectionContainer} ${customStyles.ctaSection} ${utilStyles.padding1px}`}>
        <h2 className={`${sectionStyles.centeredHeading} ${animationStyles.gradientText}`}>Connect with ASCSN</h2>
        <div className={`${sectionStyles.fadeIn} ${sectionStyles.fadeDelay1}`}>
          <p>
            Join a growing network of researchers, developers, and enthusiasts.
            Participate in our <a href="https://forum.ascsn.net" className={animationStyles.glowEffect}>Community Forum</a>,
            contribute on <a href="https://github.com/ascsn" className={animationStyles.glowEffect}>GitHub</a>, or explore our resources.
            Let's advance scientific computing together!
          </p>
          <div className={customStyles.ctaButtonContainer}>
            <a href="https://forum.ascsn.net/signup" className={`${customStyles.ctaButton} ${animationStyles.rippleEffect}`} target="_blank" rel="noopener noreferrer">Join the Discussion</a>
          </div>
        </div>
      </section>

      {/* News Highlights Section */}
      <section id="news-highlights" className={`${customStyles.sectionContainer} ${utilStyles.padding1px} ${animationStyles.waveEffect}`}>
        <h2 className={sectionStyles.sectionHeading}>Latest News</h2>
        <ul className={`${utilStyles.list} ${customStyles.newsList} ${sectionStyles.fadeIn} ${sectionStyles.fadeDelay2}`}>
          {latestNewsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} ${customStyles.newsListItem} ${animationStyles.scaleOnHover}`} key={id}>
              <Link href={`/news/${id}`}>
                <h3 className={customStyles.newsTitle}>{title}</h3>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              {/* Optional: Add a short snippet/excerpt here later */}
            </li>
          ))}
        </ul>
        <div className={`${customStyles.viewAllButtonContainer} ${sectionStyles.fadeIn} ${sectionStyles.fadeDelay3}`}>
          <Link href="/news" className={`${customStyles.ctaButton} ${animationStyles.shimmerEffect}`}>
            View All News
          </Link>
        </div>
      </section>
    </Layout>
  )
}

function DNP() {
  return (
    <section className={`${customStyles.dnpbox} ${sectionStyles.fadeIn}`}>
      <h1>Welcome DNP Visitors!</h1>
      <div className={sectionStyles.fadeIn}>
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
      </div>
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
