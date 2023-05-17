import NavBar from '../components/NavBar';
import HomePage from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>

      <HomePage />

      <Services />

      <About />

      <Contact />

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
