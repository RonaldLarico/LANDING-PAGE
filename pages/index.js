
import HomePage from '../components/Home/Index';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Footer from '../components/Footer/Index';
import Whatsapp from '../components/whatsapp';


export default function Home() {
  return (
    <div className="bg-contain overflow-hidden">

      <Whatsapp />

      <div className="bg-[url('../public/metalurgica-jesac-fondo-3.jpg')] bg-contain">
        <div className="gradient-04 z-0" />
        <HomePage />
      </div>

      <Services />

      <About />

      <div className="relative">

      <div className="gradient-04 z-0" />
        <Contact />
      </div>

      <div className="relative">

      <div className="gradient-04 z-0" />
      <Footer />
      </div>

    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
        { page }
    </Layout>
  )
}
