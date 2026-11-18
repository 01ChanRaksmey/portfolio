
import cafeLightImage from "../../assets/lightmodecafe.jpg";
import cafeDarkImage from "../../assets/darkmodecafe.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const projects = [
  {
    id:1,
    title: "DowBi Café",
    description: "A café website for exploring the menu and making reservations.",
    images: {
      light:cafeDarkImage, 
      dark: cafeLightImage,
    },
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://dowbicafe.vercel.app",
    githubUrl: "https://github.com/01ChanRaksmey/DowBiCafe",
  },
  {
    id:2,
    title: "DowBi Café",
    description: "A café website for exploring the menu and making reservations.",
    images: {
      light:  cafeDarkImage,
      dark:cafeLightImage,
    },
    technologies: ["React", "Tailwind CSS", "Motion"],
    liveUrl: "https://dowbicafe.vercel.app",
    githubUrl: "https://github.com/01ChanRaksmey/DowBiCafe",
  },
];

const ProjectSection = ({theme}) => {

  return (
    <section
      id="projects"
      className="mx-auto my-24 max-w-7xl px-6 sm:my-30 md:my-45"
    >
      <article>
        <p className="font-sans text-sm font-bold tracking-widest text-accent sm:text-base">
          SELECTED WORK
        </p>
        <h2 className="mb-3 font-display text-3xl font-medium text-logo md:text-5xl">
          Projects
        </h2>
        <p className="font-serif text-sm tracking-wide text-textMuted sm:text-base md:text-lg">
          Projects where I have been learning by turning ideas into working websites.
        </p>
      </article>

      <article className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 my-8 ">
        {
          projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-xl border w-full border-borderLine overflow-hidden shadow-2xl"
            >
              {
                project.images ? (
                  <img src={
                    theme === "dark" ? project.images.dark : project.images.light
                  } 
                    className="w-full aspect-7/3"
                  />
                )
                 : (
                  <div
                    className=" text-amber-500 font-bold w-full aspect-7/3 bg-amber-500 flex justify-center items-center text-xl text-center [text-align-last:center] 
                    sm:text-2xl"
                  >
                    The image was robbed on the way here!!!
                  </div>
                 )
              }
              <div 
                className="w-full px-4 md:px-8 bg-bgSurface h-full py-3 md:py-6"
              >
                <h3
                  className="tracking-wider text-accent font-sans font-semibold text-sm"
                >FRONT-END</h3>
                <h1
                  className="text-textMain text-xl md:text-2xl font-display font-semibold tracking-wider my-2"
                >
                  {project.title}</h1>
                <p
                  className="text-textMuted font-sans"
                >
                  {project.description}
                </p>
                <div
                  className="flex flex-wrap gap-1.5 my-2.5"
                >
                  {project.technologies.map((tech)=>(
                    <div key={tech}
                      className="inline-flex items-center gap-2 rounded-2xl border border-accent/20 bg-accent/10 px-2.5 py-2
                               text-center font-sans text-sm font-medium text-textMain"
                    >
                      {tech}
                    </div>
                  ))
                }
                </div>
                <nav className="flex flex-wrap justify-baseline gap-3 my-2.5 font-sans">
                  <a href={project.liveUrl} target="blank"
                  className="flex items-center text-accent hover:underline"
                  >
                    live site<GoArrowUpRight /></a>
                  <a href={project.githubUrl} target="blank"
                    className="flex items-center text-accent hover:underline "
                  >
                    Github<HiArrowTopRightOnSquare className="ml-1.5" /></a>
                </nav>
              </div>

            </div>
            
          ))
        }

      </article>
    </section>
  );
};

export default ProjectSection;
