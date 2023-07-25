import { Tilt } from 'react-tilt';
import { defaultOptions } from '../../constants';

const Hero = () => {

  return (
    <>
      <section className='mt-[100px] mx-10 grid grid-cols-3'>
        <div className="col-span-2 text-end">
          <h1 className="text-[70px] font-black">Hola Soy <span className="bg-clip-text text-transparent bg-gold-gradient">Simón</span></h1>
          <h2 className="text-[35px] font-semibold">Ingeniero y <br /> desarrollador web front-end</h2>
        </div>
        <Tilt option={defaultOptions} className="col-span-1 ml-8">
          <img src='src/assets/logos/Logo.png' alt='Logo' />
        </Tilt>
      </section>
    </>
  )
}

export {Hero}