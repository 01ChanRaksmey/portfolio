
import { motion, useReducedMotion } from 'motion/react'
import profileImage from '../../assets/blazerr-small.jpg'

const HomeSection = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:min-h-[calc(100vh-4.5rem)] md:grid-cols-2 lg:px-12"
    >
      <motion.article
        className="max-w-2xl"
        initial={reduceMotion ? false : { opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.90, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <motion.p
        whileInView={{rotate: -3}}
        whileHover={{rotate: 0}}
        transition={{ type: "spring", stiffness: 200, damping: 8 }}
        className="mb-4 cursor-default select-none font-sans text-lg font-semibold block uppercase tracking-[0.18em] text-accent">
          Hi, I am Raksmey
        </motion.p>
        <h1 className="font-display text-4xl leading-tight text-logo sm:text-5xl lg:text-6xl">
          I build thoughtful web experiences.
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base leading-7 text-textMuted sm:text-lg">
          I’m a front-end developer who enjoys turning ideas into responsive,
          easy-to-use websites. I care about clean layouts, useful details,
          and making every screen feel considered.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="hero-cta rounded-lg bg-accent px-5 py-3 font-sans text-sm font-semibold text-bgPrimary hover:bg-accentHover"
          >
            Explore my work
          </a>
          <a
            href="#contact"
            className="hero-cta rounded-lg border border-borderLine bg-bgSurface px-5 py-3 font-sans text-sm font-semibold text-textMain hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </motion.article>
      <motion.article
        className=" mx-auto w-full max-w-md"
        initial={reduceMotion ? false : { opacity: 0, x: 80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
        }
      >

        <img
          src={profileImage}
          alt="Portrait of Raksmey"
          className="hero-portrait aspect-5/6 w-full select-none rounded-3xl border border-borderLine object-cover"
        />
      </motion.article>
    </section>
  )
}

export default HomeSection
