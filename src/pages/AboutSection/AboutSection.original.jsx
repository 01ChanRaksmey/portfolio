import { HiOutlineAcademicCap } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { RxMagicWand } from "react-icons/rx";
import { LuUniversity } from "react-icons/lu";
import { VscProjectCompact } from "react-icons/vsc";
import { PiStudentLight } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { motion } from "motion/react";



const profilecards = [
  {icon: HiOutlineAcademicCap , mfield: "Education" , sfield: "Information Technology"},
  {icon: CgWebsite , mfield: "Specialization" , sfield: "Frontend Development"},
  {icon: RxMagicWand  , mfield: "Interests" , sfield: "React, Tailwind CSS, and web design"},
  {icon: LuUniversity , mfield: "University" , sfield: "Asia Euro University"},
]

const quickinfor = [
  {icon: VscProjectCompact , value: "2+" , label: "Projects" },
  {icon: PiStudentLight  , value: "3rd year" , label: "IT Student" },
  {icon: MdOutlineAccessTime , value: "React js" , label: "Main Focus" },
  {icon: SlEnergy , value: "Front end" , label: "Passion" },
]

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-dvh mx-auto max-w-7xl my-15 sm:my-20 md:my-25 px-6  "
    >
      <h1 className="text-logo text-3xl  md:text-4xl font-mono font-semibold mb-8 sm:mb-12 text-center" >
        ABOUT ME
      </h1>
      <article className="mx-auto grid md:grid-cols-2 max-w-5xl" >
        <div className="max-w-2xl">
          <h3 className="text-[#f1fec8] px-3.5 py-2 bg-red-600 inline-block rounded-xl text-2xl mb-3.5 font-sans font-bold">Who I am?</h3>
          <p className="text-accent leading-relaxed tracking-tight font-sans text-sm max-w-md mb-5 text-justify">
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
                whileHover= {{y: -3}}
                transition={{ type: "spring", stiffness: 200, damping: 8 }}
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
          <article
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
                  <h4 className="font-bold">{infor.label}</h4>
                </motion.div>)}

                )}
          </article>
        </div>
      </article>
    </section>
  )
}

export default AboutSection
