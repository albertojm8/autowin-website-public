'use client'
 
import { useState } from 'react'
import Image from 'next/image';

import SignUpForm from './forms/SignUpForm';

export default function SignUp({}: any) {
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
                <SignUpForm />
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