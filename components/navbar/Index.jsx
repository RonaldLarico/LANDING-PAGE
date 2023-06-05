import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full lg:bg-cyan-700/50 bg-cyan-700/95 fixed top-0 left-0 right-0 z-10 lg:py-3">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/metalurgica-logo.png"
                  width={30}
                  height={30}
                  alt="metalurgica-logo"
                />
                {/* <h2 className="text-2xl text-cyan-600 font-bold ">JESAC</h2> */}
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="font-bold uppercase text-xl text-white py-6 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-bold uppercase text-xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#services" onClick={() => setNavbar(!navbar)}>
                    Servicios
                  </Link>
                </li>
                <li className="font-bold uppercase text-xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-bold uppercase text-xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contacto
                  </Link>
                </li>
                <li className="text-white hover:text-green-700 py-6 pl-35 lg:pl-20 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-green-600 md:hover:bg-transparent">
                  <button className="bg-green-700 hover:bg-white py-1 px-6 rounded-xl text-base uppercase font-bold">
                    SOFTWARE
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;