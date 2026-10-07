import AboutSection from '../components/AboutSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import ServicesShowcase from '../components/ServicesShowcase.jsx'
import WorksShowcase from '../components/WorksShowcase.jsx'
import services from '../data/services.js'
import works from '../data/works.js'
import './HomePage.css'

function Home() {
  return (
    <div className="home_page">
      <HeroSection projectCount={works.length} serviceCount={services.length} />

      <ScrollReveal delay={80}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <ServicesShowcase services={services} showFooter />
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <WorksShowcase works={works} />
      </ScrollReveal>

    </div>
  )
}

export default Home
