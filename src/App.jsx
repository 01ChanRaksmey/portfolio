
import { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AboutSection from './pages/AboutSection/AboutSection'
import ContactSection from './pages/ContactSection/ContactSection'
import HomeSection from './pages/HomeSection/HomeSection'
import ProjectSection from './pages/ProjectSection/ProjectSection'
import SkillSection from './pages/SkillSection/SkillSection'

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="bg-bgPrimary transition-colors duration-500">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <HomeSection />
        <AboutSection  />
        <SkillSection />
        <ProjectSection theme={theme} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
