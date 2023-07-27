import html from '../assets/logos/HTML5.svg'
import css from '../assets/logos/css.svg'
import tailwind from '../assets/logos/tailwind.svg'
import javascript from '../assets/logos/javascript.png'
import react from '../assets/logos/react.png'
import redux from '../assets/logos/redux.png'
import git from '../assets/logos/git.png'
import github from '../assets/logos/github.png'

import portfolio from '../assets/projects/portfolio.png'
import caminoacasa from '../assets/projects/caminoacasa.png'
import pokedux from '../assets/projects/pokedux.png'
import reactecommerce from '../assets/projects/reactecommerce.png'
import todoapp from '../assets/projects/todoapp.png'

// Default react-tilt options
const defaultOptions = {
	reverse:false,
	max:60,
	perspective:1000,
	scale:1.2,
	speed:1000,
	transition:true,
	axis:null,
	reset:true,
	easing:"cubic-bezier(.03,.98,.52,.99)",
}

// Studies content
const estudies = [
	{
		id: 1,
    title: 'Desarrollador Frontend',
    city: 'Colombia',
    date:'2022 - Actualidad',
		header: "Platzi",
		text: 'Platzi es una de las plataformas de educación profesional en línea más grandes de América Latina, fundada en 2011 por Freddy Vega y Christian Van der Henst. Hoy tienen 3 millones de estudiantes activos en más de 140 países, miles de cursos y áreas de estudio enfocadas en el desarrollo de habilidades y conocimientos que requieren las grandes empresas del mundo.'
	},
	{
		id: 2,
    title: 'Ingeniero Mecánico',
    city: 'Bogotá Colombia',
    date:'2015 - 2020',
		header: "Universidad Santo Tomas",
		text: 'El Ingeniero Mecánico profesional de la Universidad Santo Tomás se puede desempeñar en empresas de cualquier sector económico, especialmente el secundario o industrial, en actividades que requieran el diseño, fabricación, instalación y mantenimiento de maquinaria y equipo. Así mismo, puede hacerse cargo de la gestión y supervisión de dichos proyectos de acuerdo con los recursos y normatividad existentes.'
	},	
]

// Skills VerticalTimelineElement

const skills = [
  {
    title: 'HTML',
    subtitle: '',
    icon: html,
    contentStyle: {background: '#e44d26', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  #e44d26' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #FFFFFF 0%, #1B2735 150%)', color: '#fff' },
  },
  {
    title: 'CSS',
    subtitle: '',
    icon: css,
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)', color: '#fff' },
  },
  {
    title: 'Tailwind',
    subtitle: '',
    icon: tailwind,
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #FFFFFF 0%, #1B2735 150%)', color: '#fff' },
  },
  {
    title: 'JavaScript',
    subtitle: '',
    icon: javascript,
    contentStyle: { background: '#ffdf00', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  #ffdf00' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)', color: '#fff' },
  },
  {
    title: 'React JS',
    subtitle: '',
    icon: react,
    contentStyle: { background: '#00dbef', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  #00dbef' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)', color: '#fff' },
  },
  {
    title: 'Redux-toolkit',
    subtitle: 'Nociones básicas',
    icon: redux,
    contentStyle: { background: '#7247b7', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  #7247b7' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)', color: '#fff' },
  },
  {
    title: 'Git',
    subtitle: '',
    icon: git,
    contentStyle: { background: '#ef4f32', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  #ef4f32' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)', color: '#fff' },
  },
  {
    title: 'Git Hub',
    subtitle: '',
    icon: github,
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
	contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
	iconStyle: { background: 'radial-gradient(ellipse at bottom, #FFFFFF 0%, #1B2735 150%)', color: '#fff' },
  },

]

// Projects descriptions

const projects = [
  {
    image:portfolio,
    title:'Portafolio',
    description:'Esta es el pagina que estás viendo en este momento, esta hecho con React y Tailwind para los estilos. Ademas de algunas librerias para las animaciones y otras funcionalidades.',
    tecnologies:[
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
    ],
    icon:github,
    repositoryLink:"https://github.com/SimonGG22/portfolio",
    projectLink:""
  },
  {
    image:todoapp,
    title:'ToDo App',
    description:'Este es un proyecto con una funcionalidad bastante simple, pero implementa muchos conceptos, como: uso de almacenamiento local, barra de búsqueda, arrastrar y soltar para reordenar los ToDo ademas de los hooks useState, useContext, useEffect y portals',
    tecnologies:[
      {
        name: "React",
      },
      {
        name: "SCSS",
      },
    ],
    icon:github,
    repositoryLink:"https://github.com/SimonGG22/toDo-App",
    projectLink:"https://simongg22.github.io/toDo-App/"
  },
  {
    image:pokedux,
    title:'Pokedux',
    description:'Esta es una pagina donde encontraras un buscador de pokemones incluidos en la primera generacion utilizando la pokeapi. fue realizada utilizando conceptos básicos de redux-tool-kit',
    tecnologies:[
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "API-rest",
      },
    ],
    icon:github,
    repositoryLink:"",
    projectLink:""
  },
  {
    image:reactecommerce,
    title:'React Ecommerce',
    description:'Este es un ecommerce basado en react y tailwind consumiendo la API gratuita de platzi. Incluye funcionalidades como añadir y eliminar productos ademas de un aside como checkout y tambien para ver los detalles del producto',
    tecnologies:[
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "API-rest",
      },
    ],
    icon:github,
    repositoryLink:"https://github.com/SimonGG22/React-eCommerce",
    projectLink:"https://64c2ae8ac9d3250093e01ce6--vocal-tulumba-e42a11.netlify.app/"
  },
  {
    image:caminoacasa,
    title:'Libreria Camino a Casa',
    description:'Este proyecto es un ecommerce para una libreria enfocada en literatura infantil que desea expandir sus ventas en la web.',
    tecnologies:[
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "API-rest",
      },
      {
        name: "DaisyUI",
      },
    ],
    icon:github,
    underConstruction:'Proyecto en construcción',
    repositoryLink:"",
    projectLink:""
  }
]

export { defaultOptions, estudies, skills, projects }