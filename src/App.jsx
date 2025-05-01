import './App.css';

// Import components
import AnnouncementBanner from './components/AnnouncementBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TweetLove from './components/TweetLove';
import TopicsCloud from './components/TopicsCloud';
import Cohorts from './components/Cohorts';
import Udemy from './components/Udemy';
import AlumniNetwork from './components/AlumniNetwork';
import Benefits from './components/Benefits';
import FreeResources from './components/FreeResources';
import MobileApp from './components/MobileApp';
import DiscordBanner from './components/DiscordBanner';
import YouTubeChannels from './components/YouTubeChannels';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <AnnouncementBanner />
      <Navbar />
      <Hero />
      <TweetLove />
      <TopicsCloud />
      <Cohorts />
      <Udemy />
      <AlumniNetwork />
      <Benefits />
      <FreeResources />
      <MobileApp />
      <DiscordBanner />
      <YouTubeChannels />
      <FAQ />
      <Pricing />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
