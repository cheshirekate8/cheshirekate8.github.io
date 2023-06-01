import Layout from '../components/Layout'
import { Jost, Caveat } from 'next/font/google'
import '../styles/globals.css'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${jost.variable} ${caveat.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default MyApp