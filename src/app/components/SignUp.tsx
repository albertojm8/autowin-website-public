'use client'
 
import { useState } from 'react'
import Image from 'next/image';

export default function SignUp({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <section className="relative pt-32 pb-36 overflow-hidden">
        <Image
          className="absolute top-1/2 transform -translate-y-1/2 left-0"
          src="sign-up/radial.svg" 
          alt="" 
          width={935}
          height={695}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-3 font-heading font-bold text-gray-900 text-6xl sm:text-7xl">Regístrate en Autowin, es 100% gratis.</h2>
                <p className="mb-12 text-lg text-gray-500 mt-12">¿Quieres vender tu auto rápido y fácil? Publica tu auto en Autowin, líder en venta de autos usados. Alcanza a una amplia audiencia de compradores interesados y obtén la mejor oferta. ¡Publica hoy y vende con éxito en Autowin!</p>
                <div className="flex flex-wrap -m-2 mb-6">
                  <div className="w-full md:w-1/2 p-2">
                    <input className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="text" placeholder="Apellido" name="lastName" />
                  </div>
                  <div className="w-full md:w-1/2 p-2">
                    <input className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="text" placeholder="Nombre" name="firstName" />
                  </div>
                  <div className="w-full p-2">
                    <input className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="text" placeholder="Dirección de E-Mail" name="email" />
                  </div>
                  <div className="w-full p-2">
                    <input className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="text" placeholder="Comuna" name="commune" />
                  </div>
                </div>
                <div className="flex flex-wrap -m-1.5 mb-8">
                  <div className="w-auto p-1.5">
                    <input className="w-4 h-4" type="checkbox" />
                  </div>
                  <div className="flex-1 p-1.5">
                    <p className="text-gray-500 text-sm">
                      <span>Acepto los</span>
                      <a className="text-gray-900 hover:text-gray-700" href="#">Términos y condiciones</a>
                      <span>de Autowin</span>
                    </p>
                  </div>
                </div>
                <div className="group relative md:max-w-max">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                  <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 group-hover:text-white uppercase tracking-px overflow-hidden rounded-md">
                    <div className="relative p-5 px-9 bg-gradient-green overflow-hidden rounded-md">
                      <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                      <p className="relative z-10">REGISTRARME GRATIS</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-lg ml-auto">
                <div className="flex flex-wrap -m-6">
                  <div className="w-auto p-6">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-full p-4">
                        <p className="text-xl text-black">¡Éxito total! Vendí mi auto en Autowin de manera rápida y sin complicaciones. Al publicarlo en su plataforma, alcancé a una gran cantidad de compradores interesados. Gracias a Autowin, pude obtener la mejor oferta y concretar la venta de mi auto de forma exitosa. ¡Recomiendo Autowin para vender tu auto sin preocupaciones!</p>
                      </div>
                      <div className="w-full p-4">
                        <div className="flex flex-wrap items-center -m-1.5">
                          <div className="w-auto p-1.5">
                            <Image 
                              src="/sign-up/elipse3.png" 
                              alt="" 
                              data-config-id="auto-img-2-1"
                              width={48}
                              height={48} 
                            />
                          </div>
                          <div className="w-auto p-1.5">
                            <h3 className="font-heading font-semibold text-lg text-gray-900">Javier Luttecke</h3>
                            <p className="text-gray-600 text-sm">Puerto Montt</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-6">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-full p-4">
                        <p className="text-xl text-black">¡Misión cumplida! Vendí mi auto con éxito en Autowin. Estoy satisfecho con los resultados obtenidos y recomendaría Autowin a otros usuarios que deseen vender su auto de manera eficiente.</p>
                      </div>
                      <div className="w-full p-4">
                        <div className="flex flex-wrap items-center -m-1.5">
                          <div className="w-auto p-1.5">
                            <Image 
                              src="/sign-up/elipse3.png" 
                              alt="" 
                              data-config-id="auto-img-2-1"
                              width={48}
                              height={48} 
                            />
                          </div>
                          <div className="w-auto p-1.5">
                            <h3 className="font-heading font-semibold text-lg text-gray-900">Alvaro Romero</h3>
                            <p className="text-gray-600 text-sm">Santiago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}