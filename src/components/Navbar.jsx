import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react';
import Logo from '../assets/logos/logo.jpg';

const navItems = [
  {
    label: 'Startseite',        
    href: '#',
  },
  {
    label: 'Über uns',          
    href: '#about',
  },
  {
    label: 'Angebot',           // Offer Section
    href: '#offer',
  },
  {
    label: 'Leistungen',        
    href: '#services',
  },
  
  {
    label: 'Kontakt',           
    href: '#contact',
  },
];



const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
     // Check scroll position on mount
  handleScroll()


    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`h-16 fixed top-0 left-0 z-[999] w-full overflow-hidden md:border-b border-white/50 transition-colors duration-300 ${
        isScrolled ? 'bg-green-950/60 ' : 'bg-transparent'
      } ${isVisible || !isScrolled ? "backdrop-blur-none" : "backdrop-blur-3xl"}`}
    >
      <div className="mx-auto flex  h-full w-full max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
         <span className="text-white backdrop-blur-lg px-4 py-1.5 md:hidden tracking-wider">Menü</span>

        ) : (
          <div className="animate-fade-up relative flex items-center gap-3 transition-all duration-300 md:static">
            {/* logo */}
            <a
              href="#"
              className="flex items-center gap-3"
            >
              <img
                src={Logo}
                className="h-11 w-11 rounded-full border-2 border-white"
                alt="Logo"
              />
            </a>
            <span className="text-white font-semibold text-lg tracking-wider">Grünraum Hasler</span>
          </div>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <X className="text-white hover:text-white" />
            ) : (
              <Menu className="text-white hover:text-white" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in fixed top-16 left-0 z-10 h-screen w-full flex-col bg-green-700/80 backdrop-blur-2xl md:backdrop-blur-none md:bg-transparent  md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[65%]`}
        >
          {navItems.map((item) => (
            <li
            onClick={() => setIsVisible(false)}
              key={item.href}
              className="flex items-center border-b border-white px-4 text-2xl md:border-y-0 md:border-e md:px-8 md:text-base md:first:border-s md:last:tracking-wider md:last:ml-auto md:last:border-none md:last:px-0"
            >
              <a
                href={item.href}
                className="w-full py-7 tracking-wider text-white transition-all duration-150 hover:text-white md:py-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
