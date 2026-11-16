
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AboutSection from './pages/AboutSection/AboutSection'
import ContactSection from './pages/ContactSection/ContactSection'
import HomeSection from './pages/HomeSection/HomeSection'
import ProjectSection from './pages/ProjectSection/ProjectSection'
import SkillSection from './pages/SkillSection/SkillSection'

const App = () => {
  return (
    <div className="bg-bgPrimary transition-colors duration-100 sticky top-0 z-50">
      <Header />
      <main>
        <HomeSection />
        <AboutSection  />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
