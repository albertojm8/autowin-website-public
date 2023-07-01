'use client'
 
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <section className="overflow-hidden pb-10 bg-gradient-blue">
      <section className='container mx-auto'>
        <div className="flex items-center justify-between px-8 py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <a href="#">
                <Image 
                  src="/logo.png" 
                  alt="Description of the image"
                  width={264} // Set the desired width of the image
                  height={46} // Set the desired height of the image 
                />
              </a>
            </div>
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-10">
                <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a href="#">Cómo Funciona?</a></li>
                <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a href="#">Preguntas Frecuentes</a></li>
                <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a href="#">Blog</a></li>
                <li className="font-heading text-gray-900 hover:text-gray-700 text-lg"><a href="#" className="text-gray-200">Soy Automotora</a></li>
              </ul>
            </div>
          </div>
        </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
            <div className="flex flex-wrap">
              <div className="w-auto">
                <button className="font-heading block py-2 px-5 mr-5 text-lg text-gray-900 rounded-10">Ingresar</button>
              </div>
              <div className="w-auto">
                <button className="group relative font-heading block py-2 px-5 text-lg text-gray-900 border-2 border-gray-900 overflow-hidden rounded-10">
                  <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                  <p className="relative z-10 group-hover:text-white">Registrarme</p>
                </button>
              </div>
            </div>
          </div>
          <div className="w-auto lg:hidden">
            <a href="#">
              <svg className="navbar-burger text-gray-800" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="28" fill="currentColor"></rect><path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>
        </div>
      </div>
      </div>
      <div className="navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="relative z-10 px-9 py-8 bg-white h-full"><div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block" href="#">
                  </a>
              </div>
              <div className="w-auto p-2">
                <a className="navbar-burger" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-8 w-full">
            <ul>
              <li className="mb-12"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Cómo Funciona?</a></li>
              <li className="mb-12"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">FAQ</a></li>
              <li className="mb-12"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Blog</a></li>
              <li><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Soy Automotora</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-end w-full">
            <div className="flex flex-wrap">
              <div className="w-full">
                <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                  <div className="py-2 px-5 rounded-10">
                    <p>Ingresar</p>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                  <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                  <div className="py-2 px-5 bg-white rounded-lg">
                    <p className="relative z-10">Registrarme Gratis</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -m-6 pt-24">
          <div className="w-full p-6 lg:w-1/2">
            <div className="">
              <p className="mb-8 font-heading max-w-max px-5 py-2.5 uppercase font-semibold text-xs tracking-wider text-indigo-900 bg-gradient-blue2 rounded-full">VENDE TU AUTO EN UNA SEMANA</p>
              <h1 className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl font-bold text-gray-100">Publica tu auto y recibe ofertas de cientos de automotoras.</h1>
              <p className="mb-9 text-white text-xl">Y obtén el mejor precio posible!</p>
              <button className="group relative font-heading px-10 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md">
                <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800"></div>
                <p className="relative z-10">Publicar mi Auto</p>
              </button>
            </div>
          </div>
          <div className="w-full p-6 lg:w-1/2">
          <Image 
            className="block mx-auto" 
            src="/hero-image.png"
            width={730}
            height={340} 
            alt="" data-config-id="image3" 
          />
          </div>
        </div>
      </div>
    </section>
  )
}