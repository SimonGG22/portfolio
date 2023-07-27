import { useState, useEffect } from 'react';

import logo from '../../assets/Logo.png'


const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
        <div className='w-full flex justify-between items-center mx-10'>
					<a className='flex items-center gap-1 cursor-pointer' onClick={() => window.scrollTo(0, 0)}>
						<img className='w-5 h-6' src={logo} alt='Logo' />
						<p className='font-bold text-lg'>Simón | Front-end Developer</p>
					</a>
					<div className='hidden md:flex items-center gap-4'>
						<a href='#about'>About</a>
						<a href='#studies'>Studies</a>
						<a href='#projects'>Projects</a>
						<a href='#contactMe'>Contact me</a>
					</div>
				</div>
    </nav>
  )
}

export {Navbar}