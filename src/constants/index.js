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
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
	},
	{
		id: 2,
    title: 'Ingeniero Mecánico',
    city: 'Bogotá Colombia',
    date:'2015 - 2020',
		header: "Universidad Santo Tomas",
		text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
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
    underConstruction:'Proyecto en construcción'
  }
]

export { defaultOptions, estudies, skills, projects }