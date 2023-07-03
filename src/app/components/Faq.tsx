'use client'
 
import { useState } from 'react'
 
export default function Faq({}: any) {
  const [count, setCount] = useState(0)
 
  return (
    <section className="pt-24 pb-32 bg-gradient-gray2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-20">
            <h2 className="mb-4 font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900">Preguntas Frecuentes</h2>
            <p className="text-lg text-gray-600 text-center">Respuestas a tus preguntas más frecuentes sobre como funciona Autowin.</p>
          </div>
          <div className="flex flex-wrap -m-6 mb-24">
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">Cómo funciona Autowin?</h2>
                <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ornare aenean ut justo elit amet. Gravida pulvinar ac elementum praesent vel quis accumsan, proin rhoncus.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">Cómo sabré cuando recibo una oferta por mi auto?</h2>
                <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ornare aenean ut justo elit amet. Gravida pulvinar ac elementum praesent vel quis accumsan, proin rhoncus.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">Autowin Venderá mi auto?</h2>
                <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ornare aenean ut justo elit amet. Gravida pulvinar ac elementum praesent vel quis accumsan, proin rhoncus.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">Una vez publicado mi auto, puedo elegir la automotora donde se realiza la venta?</h2>
                <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ornare aenean ut justo elit amet. Gravida pulvinar ac elementum praesent vel quis accumsan, proin rhoncus.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">Autowin me cobra comisión por publicar mi auto?</h2>
                <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ornare aenean ut justo elit amet. Gravida pulvinar ac elementum praesent vel quis accumsan, proin rhoncus.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">Que pasa si me arrepiento y quiero despublicar mi auto de Autowin?</h2>
                <p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ornare aenean ut justo elit amet. Gravida pulvinar ac elementum praesent vel quis accumsan, proin rhoncus.</p>
              </div>
            </div>
          </div>
          <a className="group block max-w-max mx-auto font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden" href="#">
            <p className="mb-1">No encontraste la respuesta? Contáctanos!</p>
            <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500"></div>
          </a>
        </div>
      </section>
  )
}