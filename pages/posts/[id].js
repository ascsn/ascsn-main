import { useEffect } from 'react'
import { useRouter } from 'next/router'

// This is a redirect component that will send users from old blog URLs to the news section
export default function PostRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to news page
    router.push('/news')
  }, [router])

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Redirecting...</h1>
      <p>Our blog content has moved to the news section.</p>
      <p>If you are not redirected automatically, <a href="/news">click here</a>.</p>
    </div>
  )
}

// Use getStaticPaths to handle any old blog post IDs
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking' // This ensures the redirect works for any path
  }
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
