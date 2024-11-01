import logo from '../assets/Logo.svg';
import { useState, useEffect } from 'react';
import { navLinks } from "../Constants";

const HeadNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-thirdary shadow-lg' 
          : 'bg-transparent'
        }
        ${isMobileMenuOpen ? 'bg-black' : ''}
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="text-background font-bold text-xl w-10" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            {/* nav */}
                {navLinks.map((link) => {
                    return <a key={link.label} href={link.href} className="text-background hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
                })}
            {/* main button */}
                <div className="flex items-baseline space-x-4">
                    <button className="rounded-xl border-2 border-background text-background p-2">Log In</button>
                    <button className={`rounded-xl border-2  text-background p-2 transition-all bg-thirdary ${scrolled ? 'border-background' : 'border-thirdary'} `}>Sign Up</button>
                </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // X icon when menu is open
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`
            md:hidden
            transition-all duration-300 ease-in-out
            bg-thirdary
            rounded-lg
            ${isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
            }
            overflow-hidden
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
                return <a key={link.label} href={link.href} className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
            })}


          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeadNav