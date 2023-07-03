'use client'
 
import { useState } from 'react'
 
export default function Steps({}: any) {
  const [count, setCount] = useState(0)
 
  return (
    <section className="relative py-36 bg-gray-100 overflow-hidden"><div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-5">
          <div className="w-full md:w-1/2 xl:w-1/4 p-5">
            <div className="p-7 rounded-10 bg-purple-200">
              <div className="w-14 m-auto rounded-xl rounded-full h-14 pt-4 text-lg font-bold bg-white"><p className="text-center">1</p></div>
              <h2 className="mb-4 font-heading font-bold text-8xl sm:text-9xl text-gray-900 mt-4">Publica tu Auto</h2>
              <p className="text-gray-600 text-base">Publica tu auto, mientras más información completes, mejores ofertas recibirás.</p>
              <a className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden" href="#">
      
                <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500"></div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-5">
            <div className="p-7 rounded-10 bg-purple-200">
              <div className="w-14 m-auto rounded-xl rounded-full h-14 pt-4 text-lg font-bold bg-white"><p className="text-center">2</p></div>
              <h2 className="mb-4 font-heading font-bold text-8xl sm:text-9xl text-gray-900 mt-4">Recibe Ofertas </h2>
              <p className="text-gray-600 text-base">Cientos de compraventas y automotoras ofertarán por tu auto publicado,</p>
              <a className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden" href="#">
      
                <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500"></div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-5">
            <div className="p-7 rounded-10 bg-purple-200">
              <div className="w-14 m-auto rounded-xl rounded-full h-14 pt-4 text-lg font-bold bg-white"><p className="text-center">3</p></div>
              <h2 className="mb-4 font-heading font-bold text-8xl sm:text-9xl text-gray-900 mt-4">Vende tu auto</h2>
              <p className="text-gray-600 text-base">Entrega tu auto a la automotora que elegiste, ellos se encargarán del resto.</p>
              <a className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden" href="#">
      
                <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500"></div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-5">
            <h2 className="mb-4 font-bold font-heading text-4xl text-gray-900">Eres Automotora?</h2>
            <p className="mb-7 text-base text-gray-600">Te invitamos a participar en nuestro programa de consignación de autos. Maximiza tus ganancias y agiliza el proceso de venta. </p>
            <button className="group p-0.5 mb-8 font-heading block w-full md:w-auto text-base text-gray-900 font-bold bg-white hover:bg-gray-50 overflow-hidden rounded-md">
              <div className="relative py-3.5 px-7 bg-white rounded">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500"></div>
                <p className="relative z-10">Registrarme como automotora</p>
              </div>
            </button>
          </div>
        </div>
        </div>
      </section>
  )
}