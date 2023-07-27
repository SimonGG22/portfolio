import { Tilt } from 'react-tilt';
import { defaultOptions } from '../../constants';
import pdf from '../../assets/cvPortafolio.pdf'

const Hero = () => {
  return (
    <>
      <section className='flex flex-col-reverse justify-center items-center md:grid md:grid-cols-3 mt-[100px] mx-4 md:mx-10 '>
        <div className="md:col-span-2 text-center md:text-end md:order-first">
          <h1 className="text-[70px] font-black">Hola Soy <span className="bg-clip-text text-transparent bg-gold-gradient">Simón</span></h1>
          <h2 className="text-[35px] font-semibold">Ingeniero y <br /> desarrollador web front-end</h2>
          <button className='w-22 h-10 px-4 mt-5 bg-zinc-800 rounded-full hover:bg-gold-gradient hover:scale-110'>
            <a className='font-semibold' href={pdf} target="_blank" rel="noopener noreferrer">Descargar CV</a>
          </button>
        </div>
        <Tilt option={defaultOptions} className="flex justify-center md:col-span-1 md:ml-8 md:mt-20">
          <img src='../../assets/logos/Logo.png' alt='Logo' />
        </Tilt>
      </section>
    </>
  )
}

export {Hero}