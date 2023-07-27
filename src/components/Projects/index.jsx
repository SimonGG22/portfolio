/* eslint-disable react/prop-types */
  import { projects } from "../../constants"; 

const ProjectCard = ({project}) => {
  return (
    <div className="flex items-center justify-center">
      <div className='bg-gray-gradient p-5 rounded-2xl sm:w-[360px] w-full'>
        <div onClick={() => project.projectLink ? window.open(project.projectLink, "_blank") : null} className='relative w-full h-[230px] cursor-pointer'>
          <img
            src={project.image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-125'
            >
              <img
                onClick={() => project.repositoryLink ? window.open(project.repositoryLink, "_blank") : null}
                src={project.icon}
                alt='source code'
                className='w-1/2 h-1/2 object-contain z-10'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{project.title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
          <p className='mt-2 text-red-700 font-bold text-[14px] text-center bg-slate-400 rounded-full'>{project.underConstruction}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-3'>
          {project.tecnologies.map((tag) => (
            <p
              key={tag.name}
              className='text-[14px] font-medium text-black bg-slate-400 px-2 py-1 rounded-full'
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <div id="projects" className="w-5/6">
      <h2 className='text-center md:text-start text-[50px] font-black mb-12'>Proyectos</h2>
      <p className="w-full text-center md:text-start pb-14 text-xl">A lo largo de mi trayectoria académica, he construido diversos proyectos. A continuación, te presento algunos de los más interesantes, junto con sus correspondientes repositorios en GitHub:</p>
      <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export { ProjectsSection }