import Design from '../components/design/Index';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page );

  return getLayout(
  <div>
  <Component {...pageProps} />
  <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
  </div>
  )
}

export default MyApp
