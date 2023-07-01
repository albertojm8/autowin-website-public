'use client'
 
import { useState } from 'react'
import Image from 'next/image'
export default function Blog({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <section className="pt-20 pb-36 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="md:max-w-lg mx-auto text-center mb-20">
          <h2 className="mb-4 font-heading font-semibold text-6xl sm:text-7xl">Blog</h2>
          <p className="text-lg text-gray-400">Descubre contenido relevante y útil en nuestro blog. Mantente informado sobre noticias, consejos y tendencias del mundo automotriz.</p>
        </div>
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <Image 
                  className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" 
                  src="/blog/alessio-lin--6LYjG0H32E-unsplash.jpeg"
                  width={1920}
                  height={2880}
                  alt="" 
                />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">CONSEJOS . 8 MIN LECTURA</h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">Los mejores consejos para el mantenimiento de tu auto: ¡Mantén tu vehículo en óptimas condiciones!</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <Image 
                  className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" 
                  src="/blog/andrew-te-Vf-yrxDquiY-unsplash.jpg"
                  width={1920}
                  height={2880}
                  alt="" 
                />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">NOVEDADES . 6 MIN LECTURA</h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">Las últimas novedades en tecnología automotriz: Descubre las innovaciones que están transformando la industria</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                
                <Image 
                className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" 
                src="/blog/jonathan-borba-gYhEjnBFejE-unsplash.jpg" 
                width={1920}
                height={1280}
                alt="" />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">NOVEDADES . 8 MIN LECTURA</h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">Los autos más esperados del año: Conoce los modelos que están generando expectativas en el mercado</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-3">
            <a className="group" href="#">
              <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <Image 
                className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" 
                src="/blog/todd-trapani-gwFOOpjq9bU-unsplash.jpg" 
                width={1920}
                height={1280}
                alt="" />
                <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">SEGUROS . 4 MIN LECTURA</h2>
                    <p className="font-heading font-semibold text-lg text-white group-hover:underline">Consejos para elegir el seguro de auto adecuado: Protege tu vehículo y tu tranquilidad</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}