import AboutSection from '../components/AboutSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ServicesShowcase from '../components/ServicesShowcase.jsx'
import WorksShowcase from '../components/WorksShowcase.jsx'
import services from '../data/services.js'
import works from '../data/works.js'

function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ServicesShowcase services={services} showFooter />

      <WorksShowcase works={works} />
    </>
  )
}

export default Home;
