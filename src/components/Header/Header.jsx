import { useState,useEffect } from "react";
import { CiLight,CiDark } from "react-icons/ci";
import { IoClose, IoMenu } from "react-icons/io5";
import { FiCode, FiFolder, FiHome, FiMail, FiUser } from "react-icons/fi";
const navLinks = [
  { name: 'Home', href: '#home', icon: FiHome, iconColor: 'text-icon-home' },
  { name: 'About', href: '#about', icon: FiUser, iconColor: 'text-icon-about' },
  { name: 'Skills', href: '#skills', icon: FiCode, iconColor: 'text-icon-skills' },
  { name: 'Projects', href: '#projects', icon: FiFolder, iconColor: 'text-icon-projects' },
  { name: 'Contact', href: '#contact', icon: FiMail, iconColor: 'text-icon-contact' },
];

const Header = () => {


    // Dark Mode
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    let observer;

    const observeSections = () => {
      observer?.disconnect();
      const topMargin = Math.round(window.innerHeight * 0.25);
      const bottomMargin = Math.round(window.innerHeight * 0.65);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px` }
      );

      sections.forEach((section) => observer.observe(section));
    };

    observeSections();
    window.addEventListener("resize", observeSections);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, []);


  return (


    <header className="sticky top-0 z-50 border-b border-borderLine bg-bgPrimary flex justify-between px-3.5 py-3 transition-colors duration-400">
      <a href="#home" className="mr-1 font-display text-3xl text-logo sm:mr-5">Portfolio<span className="text-highlight">.</span></a>

      <div className="flex items-center gap-2.5 sm:gap-5 md:gap-8">
          <nav className="hidden items-center gap-2 whitespace-nowrap md:flex lg:gap-5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a href={link.href} key={link.name}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                onClick={() => setActiveSection(link.href.slice(1))}
                className="nav-link desktop-nav-link font-sans text-sm font-semibold text-accent transition-colors hover:text-accentHover"
                >
                  <Icon aria-hidden="true" className={`mr-2 inline-block align-[-2px] text-base ${link.iconColor}`} />
                  {link.name}
                </a>
              );
            }
            )}

          </nav>
          <button
           onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            type="button"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            className="rounded-lg border border-borderLine bg-bgSurface px-2 py-2 text-xl text-textMain transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "light" ? (
              <CiLight />
            ) : (
              <CiDark className="text-logo" />
            )}
          </button>
          <button
          className="rounded-lg border border-borderLine bg-bgSurface px-2 py-2 text-xl text-textMain transition-colors hover:border-accent hover:text-accent md:hidden"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-1/2 top-full mt-2 grid w-[90%] -translate-x-1/2 grid-cols-3 gap-x-1 gap-y-1 rounded-xl border border-borderLine bg-bgSurface p-2 shadow-lg sm:grid-cols-5 md:hidden"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  href={link.href}
                  key={link.name}
                  aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                  onClick={() => {
                    setActiveSection(link.href.slice(1));
                    setMenuOpen(false);
                  }}
                  className="nav-link inline-block justify-self-center rounded-lg px-1.5 py-3 font-sans text-sm font-semibold text-accent transition-colors hover:bg-bgPrimary hover:text-accentHover sm:px-3"
                >
                  <Icon aria-hidden="true" className={`mr-1 inline-block align-[-2px] text-base ${link.iconColor} sm:mr-1.5`} />
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}
    </header>
  )
}

export default Header
