
import HomePage from '../components/home/Index';
import Services from '../components/services/Index';
import About from '../components/about/Index';
import Contact from '../components/contact/Index';
import Layout from '../components/layout/Index';
import Footer from '../components/feed/Index';
import Whatsapp from '../components/whatsapp/Index';
import Service from '../components/services/service';
import Design from '../components/design/Index';
import AboutUs from '../components/about/AboutUs'

export default function Home() {
  return (
  <div className="bg-contain overflow-hidden bg-black">

    <div className="w-full h-screen lg:h-auto bg-no-repeat bg-center bg-cover">
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
      <div className="gradient-02 z-0" />
      <HomePage />
    </div>

    <div className="relative">
      <div className="gradient-04 z-0" />
      <Services />
    </div>

    <div className="relative">
      <div className="gradient-04 z-0" />
      <div className="gradient-02 z-0" />
      <Service />
    </div>

    <div className="relative">
      <div className="gradient-03 z-0" />
      <div className="gradient-02 z-0" />
      <About />
    </div>

    <div className="relative">
      <div className="gradient-03 z-0" />
      <div className="gradient-02 z-0" />
      <AboutUs />
    </div>

    <div className="relative">
      <div className="gradient-03 z-0" />
      <div className="gradient-02 z-0" />
      <Contact />
    </div>

    <div className="relative">
      <div className="gradient-03 z-0" />
      <div className="gradient-02 z-0" />
      <Footer />
    </div>

      <Whatsapp />
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

