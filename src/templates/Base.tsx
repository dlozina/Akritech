import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { AboveFooter } from './AboveFooter';
import { Banner } from './Banner';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Header } from './Header';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <About />
    <VerticalFeatures />
    <AboveFooter />
    <Banner />
    <Contact />
    <Footer />
  </div>
);

export { Base };
