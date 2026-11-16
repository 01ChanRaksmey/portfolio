import { HiOutlineAcademicCap } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { RxMagicWand } from "react-icons/rx";
import { LuUniversity } from "react-icons/lu";
import { VscProjectCompact } from "react-icons/vsc";
import { PiStudentLight } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { motion, useReducedMotion } from "motion/react";



const profilecards = [
  {icon: HiOutlineAcademicCap , mfield: "Education" , sfield: "Information Technology"},
  {icon: CgWebsite , mfield: "Specialization" , sfield: "Frontend Development"},
  {icon: RxMagicWand  , mfield: "Interests" , sfield: "React, Tailwind CSS, and web design"},
  {icon: LuUniversity , mfield: "University" , sfield: "Asia Euro University"},
]

const quickinfor = [
  {icon: VscProjectCompact , value: "2+" , label: "Projects" },
  {icon: PiStudentLight  , value: "3rd year" , label: "IT Student" },
  {icon: MdOutlineAccessTime , value: "React js & Typescript" , label: "Main Focus" },
  {icon: SlEnergy , value: "Front end" , label: "Passion" },
]

const AboutSection = () => {
  const reduceMotion = useReducedMotion();
  const introTitle = "Who am I?";

  return (
    <section
      id="about" 
      className=" mx-auto max-w-7xl scroll-mt-24 my-15 sm:my-20 md:my-25 px-6  "
    >
      <h1 className="text-logo text-3xl  md:text-4xl font-mono font-semibold mb-8 sm:mb-12 text-center" >
        ABOUT ME
      </h1>
      <article className="mx-auto grid md:grid-cols-2 max-w-5xl" >
        <div className="max-w-2xl">
          <motion.h3
            aria-label={introTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="text-[#f1fec8] px-3.5 py-2 bg-red-600 inline-block rounded-xl text-2xl mb-3.5 font-sans font-bold"
          >
            {reduceMotion ? (
              introTitle
            ) : (
              <>
                {Array.from(introTitle).map((character, index) => (
                  <motion.span
                    aria-hidden="true"
                    key={`${character}-${index}`}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.05 } },
                    }}
                  >
                    {character === ' ' ? '\u00a0' : character}
                  </motion.span>
                ))}
                <span className="typing-cursor" aria-hidden="true" />
              </>
            )}
          </motion.h3>
          <p className="text-accent leading-relaxed tracking-tighter font-sans text-sm max-w-md mb-5 text-justify">
            I enjoy building websites that feel clear, responsive, and easy to use.
            I am especially interested in front-end development, where I can bring design and problem-solving together.
            Through each project, I am learning how to turn ideas into thoughtful experiences for the people using them.
          </p>
          <article className="max-w-full">
            {
              profilecards.map((field) =>{
                const Icon = field.icon;
                return (
                <motion.div 
                initial={{ x: -36, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover= {{y: -3}}
                transition={{ type: "spring", stiffness: 180, damping: 8 }}
                key={field.mfield}
                className="flex text-textMuted my-2.5 items-center gap-5"
                >
                  <Icon className="text-2xl bg-accent text-bgPrimary shrink-0 p-4 rounded-xl size-14" />
                  <div>
                    <p className="text-card">{field.mfield}</p>
                    <h4 className="font-bold">{field.sfield}</h4>
                  </div>
                </motion.div>)
                })
            }
          </article>
        </div>

        <div  className="">
          <motion.article
                initial={{opacity:0 , x:240}}
                whileInView={{opacity: 1 ,x: 0}}
                transition={{duration:1.5}}
          className="grid grid-cols-2"
            >{
              quickinfor.map((infor) =>{
                const Icon = infor.icon;
                  return (
                <motion.div 
                whileHover={{y: -4}}
                key={infor.label}
                className="hero-cta shrink-0 bg-card text-bgPrimary rounded-xl gap-2 text-center m-3 py-5 flex flex-col items-center"
                >
                  <Icon className="text-3xl" />
                  <p className="font-sans font-bold">{infor.value}</p>
                  <h4 className="font-bold text-red-600">{infor.label}</h4>
                </motion.div>)}

                )}
          </motion.article>
          <div className="mt-5 flex justify-center" aria-hidden="true">
            <motion.svg
              initial={{ x: 420, opacity: 0, rotate: -6 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ type: 'spring', stiffness: 55, damping: 16, mass: 1.2 ,duration:3 }}
              viewBox="0 0 320 190"
              className=" max-w-full w-40 sm:w-60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(320 0) scale(-1 1)">
              <path d="M91 111c-25 4-40 0-55-12-7-6-12-4-10 3 2 8 11 17 25 20l-8 8c17 2 35-3 51-12Z" fill="var(--color-dragon-body)" stroke="var(--color-dragon-outline)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M148 108 112 90 57 29l28 12-8-28 35 36 0-32 22 38 21-19-3 42 20 13Z" fill="var(--color-dragon-body)" stroke="var(--color-dragon-outline)" strokeWidth="3" strokeLinejoin="round" />
              <path d="m148 105-36-15-35-49m35 49-8-41m8 41-35-49m35 49 22-35m-22 35 25-28" fill="none" stroke="var(--color-bgPrimary)" strokeWidth="2.5" strokeLinecap="round" opacity=".85" />
              <path d="M84 111c17-12 41-17 65-13 18 3 33 9 47 18-19 1-36 0-53-3-19-3-39 2-59 10" fill="var(--color-dragon-body)" stroke="var(--color-dragon-outline)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M112 112c-4 7-10 11-17 13l-8 9 12-1 10-5m48-21c-1 7-5 12-12 15l-7 9 12-2 9-8" fill="none" stroke="var(--color-dragon-outline)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m100 134 8 1 5 5m42-9 8 1 5 5" fill="none" stroke="var(--color-highlight)" strokeWidth="3" strokeLinecap="round" />
              <path d="m119 103 3-12 12 10m18 0 13-13 2 20" fill="var(--color-highlight)" stroke="var(--color-dragon-outline)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M165 88c2-18 16-29 34-27 12 1 20 8 23 17l24 4c7 1 8 8 1 11l-24 8c-7 11-23 15-39 11-13-3-21-12-19-24Z" fill="var(--color-dragon-body)" stroke="var(--color-dragon-outline)" strokeWidth="3" strokeLinejoin="round" />
              <path d="m178 64-2-18 16 12m12 4 11-17 2 22" fill="var(--color-highlight)" stroke="var(--color-dragon-outline)" strokeWidth="3" strokeLinejoin="round" />
              <ellipse cx="205" cy="73" rx="3.5" ry="5" fill="var(--color-dragon-eye)" />
              <circle cx="206" cy="74" r="1.8" fill="var(--color-logo)" />
              <path d="M225 91h8" stroke="var(--color-logo)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M248 83c20-16 25-12 17-1 17-10 25-5 10 5 15-3 18 4 1 9 10 5 4 11-9 6-7-3-13-8-19-13Z" fill="var(--color-dragon-fire)" />
              <path d="M249 87c12-8 16-5 9 2 11-4 14 0 3 4 8 3 4 7-4 3-4-2-6-5-8-9Z" fill="var(--color-dragon-fireMid)" />
              <path d="M248 92c7-4 9-2 5 2 5 0 6 3 0 3-2-1-4-3-5-5Z" fill="var(--color-dragon-fireCore)" />
              <path d="M101 82c-6-9-14-13-23-14m109-10 5-10 5 12" fill="none" stroke="var(--color-highlight)" strokeWidth="4" strokeLinecap="round" />
              <path d="M235 56c3-8 7-8 9 0m-5-4c1-8 5-8 6 0" fill="none" stroke="var(--color-highlight)" strokeWidth="3" strokeLinecap="round" />
              </g>
            </motion.svg>
          </div>
        </div>
      </article>
    </section>
  )
}

export default AboutSection
