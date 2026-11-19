import { FiCode, FiDroplet, FiSmartphone, FiTool, FiZap } from 'react-icons/fi'
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { motion } from 'motion/react'

const skillGroups = [
  {
    title: 'Frontend',
    icon: FiCode,
    skills: [
      { name: 'HTML', icon: SiHtml5, color: 'text-[#e34f26]' },
      { name: 'CSS', icon: SiCss, color: 'text-[#1572b6]' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-[#c69200]' },
      { name: 'React', icon: SiReact, color: 'text-[#149eca]' },
    ],
  },
  {
    title: 'Styling',
    icon: FiDroplet,
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#0ea5e9]' },
      { name: 'Responsive design', icon: FiSmartphone, color: 'text-accent' },
    ],
  },
  {
    title: 'Tools & Libraries',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-[#f05032]' },
      { name: 'GitHub', icon: SiGithub, color: 'text-textMain' },
      { name: 'VS Code', icon: FiCode, color: 'text-[#007acc]' },
      { name: 'Motion', icon: FiZap, color: 'text-highlight' },
    ],
  },
]


const SkillSection = () => {
  return (
    <section id="skills" className="grid place-items-center mx-auto w-full max-w-7xl px-6
       my-16 sm:my-24 md:my-60 py-8 sm:py-10 md:py-15 bg-Sage rounded-3xl scroll-mt-24"
    >
      

      {/* tittles */}
      <article
       className="grid place-items-center gap-1.5 max-w-full"
      >
        <h4 className="text-accent font-bold font-sans tracking-widest text-sm sm:text-[16px] uppercase">
          What I work with
        </h4>
        <h2 className="text-logo text-4xl md:text-5xl font-medium mb-3 font-display">
          Skills & tools
        </h2>
        <p className="text-textMuted text-sm sm:text-[16px] md:text-lg font-serif text-justify [text-align-last:center] tracking-wide">
          The technologies I use to turn ideas into responsive websites.
        </p>
      </article>


      {/* cards */}
      <article 
      className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 px-1 py-4 max-w-5xl my-4"
      >
        {
          skillGroups.map((card) =>{
            return (
              <motion.article
                initial = {{opacity: 0 , y: 80}}
                whileInView={{opacity:1 , y: 0}}
                whileHover={{rotate: 1}}
                transition={{ type: "spring", stiffness: 500, damping: 8 , duration:4}}
                key={card.title}
                className="skill-group-card group flex min-h-60 select-none flex-col gap-5 rounded-2xl border border-borderLine bg-bgSurface p-5 
                shadow-[0_10px_28px_-20px_rgba(38,60,49,0.55)] sm:p-6"
              >
                <h4 className="flex items-center justify-center gap-2.5 border-b border-borderLine pb-3 font-sans text-lg font-bold text-logo">
                  <card.icon aria-hidden="true" className="text-xl text-accent" />
                  {card.title}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {card.skills.map(({ name, icon: SkillIcon, color }) => (
                    <div
                      key={name}
                      className="inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2.5 text-center font-sans text-sm font-medium text-textMain"
                    >
                      <SkillIcon aria-hidden="true" className={`shrink-0 text-base ${color}`} />
                      {name}
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          }
        )
        }
      </article>

      <p
      className="text-textMuted"
      >
        Currently learning <strong className="text-amber-500">TypeScript.</strong>
      </p>


    </section>
  )
}

export default SkillSection
