import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllNewsIds, getNewsData } from '../../lib/news'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllNewsIds()
  return {
    paths,
    // Allow ISR to generate new pages on-demand when articles go live
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const newsData = await getNewsData(params.id);
  return {
    props: {
      newsData: {
        ...newsData,
      }
    },
    // Re-generate the page at most once every 60 seconds
    revalidate: 60
  }
}

export default function NewsPost({ newsData }) {
  return (
    <Layout>
      <Head>
        <title>{newsData.title}</title>
        <meta name="description" content={newsData.metaDescription} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{newsData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={newsData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: newsData.contentHtml }} />
      </article>
    </Layout>
  )
}
