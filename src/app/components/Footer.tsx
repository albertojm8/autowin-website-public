'use client'
 
import { useState } from 'react'
import Image from 'next/image'

export default function Footer({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:items-center -m-6">
          <div className="w-full md:w-auto p-6">
            <Image 
              src="/autowinAsset-4-at-2x.png"
              alt=""
              width={128}
              height={24}
              className="w-24" 
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <ul className="flex flex-wrap -m-5">
              <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="#">Cómo funciona?</a></li>
              <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="#">Preguntas Frecuentes</a></li>
              <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="#">Blog</a></li>
              <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="#">Precios</a></li>
            </ul>
          </div>
          <div className="w-auto md:ml-auto p-6">
            <div className="flex flex-wrap items-center -m-1.5">
              <div className="w-auto p-1.5">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="w-auto p-1.5">
                <h3 className="font-heading font-medium text-base text-white">contacto@autowin.cl</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="py-9">
          <div className="border-b border-gray-800"></div>
        </div>
        <div className="flex flex-wrap items-center justify-between -m-6">
          <div className="w-auto p-6">
            <p className="text-sm text-gray-300">© Copyright 2023. Todos los derechos reservados por Autowin</p>
          </div>
          <div className="w-auto p-6">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6"><a className="text-gray-300 hover:text-gray-400 text-sm" href="#">Política de Privacidad</a></div>
              <div className="w-auto p-6"><a className="text-gray-300 hover:text-gray-400 text-sm" href="#">Terms y condiciones</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}