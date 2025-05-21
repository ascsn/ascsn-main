import '../styles/global.css'
import PageTransition from '../components/page-transition'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome icons from flashing larger before loading
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  )
}
