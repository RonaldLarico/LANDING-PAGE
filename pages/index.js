
import HomePage from '../components/Home/Index';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Footer from '../components/Footer/Index';


export default function Home() {
  return (
    <div className="bg-[url('../public/planet-09.png')] overflow-hidden">

       <div className="relative">
        <div className="gradient-04 z-0" />
        <HomePage />
       </div>

      <Services />

      <About />

      <Contact />

      <Footer />

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
