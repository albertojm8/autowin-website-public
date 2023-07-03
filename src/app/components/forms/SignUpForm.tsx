'use client'
 
import { useRef, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Captcha from "react-google-recaptcha";

import { z } from 'zod';

const API_URL = 'http://your-api-url.com'; // Replace with your actual API URL

const schema = z.object({
  firstName: z.string().min(2, { message: 'Nombre inválido' }),
  lastName: z.string().min(2, { message: 'Apellido inválido' }),
  email: z.string().email({ message: 'Email inválido' }),
  commune: z.string().min(10, { message: 'Comuna inválida' }),
  acceptTerms: z.boolean().refine((val) => val === true, { message: 'Debes aceptar los términos y condiciones' })
});

type FormValue = z.infer<typeof schema>;

const isSubmitting = false;

export default function SignUpForm() {

  const captchaRef = useRef<Captcha>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormValue) => {

    console.log("Sending message to /api/subscribe", data);

    try {
      // Make an API request to submit the form data
      const captcha = await captchaRef.current?.executeAsync();

      console.log("Captcha response", captcha);
      
      const response = await axios.post('/api/subscribe', {data, captcha});
      console.log(response.data);
      // Handle success or display a success message
    } catch (error) {
      console.error(error);
      // Handle error or display an error message
    }
  };

  return (
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <Captcha
            ref={captchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA!}
          />
          <h2 className="mb-3 font-heading font-bold text-gray-900 text-6xl sm:text-7xl">Regístrate y publica en Autowin, es 100% gratis.</h2>
          <p className="mb-12 text-lg text-gray-500 mt-12">¿Quieres vender tu auto rápido y fácil? Publica tu auto en Autowin, líder en venta de autos usados. Alcanza a una amplia audiencia de compradores interesados y obtén la mejor oferta. ¡Publica hoy y vende con éxito en Autowin!</p>
          <div className="flex flex-wrap -m-2 mb-6">
            <div className="w-full md:w-1/2 p-2">
              <input 
                type="text" 
                placeholder="Apellido"
                {...register('lastName', {
                  required: true,
                })}
                className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" 
              />
              {errors.lastName && (
                <p role="alert" className="text-red-600 pt-2">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 p-2">
              <input
              type="text" 
              placeholder="Nombre"
              {...register('firstName', {
                required: true,
              })} 
              className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" 
              />
              {errors.firstName && (
                <p role="alert" className="text-red-600 pt-2">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="w-full p-2">
              <input
                id="email"
                type='text'
                {...register('email', {
                  required: true,
                })}
                className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" 
                placeholder="Dirección de E-Mail" 
              />
              {errors.email && (
                <p role="alert" className="text-red-600 pt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="w-full p-2">
              <input 
                id="commune"
                type='text'
                placeholder='Providencia'
                {...register('commune', {
                  required: true,
                })}
                className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" 
              />
              {errors.commune && (
                <p role="alert" className="text-red-600 pt-2">
                  {errors.commune.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -m-1.5 mb-8">
            <div className="w-auto p-1.5">
              <input 
              id="acceptTerms"
              type="checkbox"
              {...register('acceptTerms', {
                required: true,
              })}
              className="w-4 h-4" />
            </div>
            <div className="flex-1 p-1.5">
              <p className="text-gray-500 text-sm">
                <span>Acepto los</span>
                <a className="text-gray-900 hover:text-gray-700" href="#"> términos y condiciones </a>
                <span>de Autowin</span>
              </p>
              {errors.acceptTerms && (
                <p role="alert" className="text-red-600 pt-2">
                  {errors.acceptTerms.message}
                </p>
              )}
            </div>
          </div>
          <div className="group relative md:max-w-max">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
            <button disabled={isSubmitting} className="p-1 w-full font-heading font-semibold text-xs text-gray-900 group-hover:text-white uppercase tracking-px overflow-hidden rounded-md">
              <div className="relative p-5 px-9 bg-gradient-green overflow-hidden rounded-md">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                <p className="relative z-10 text-uppercase">{isSubmitting ? 'Enviando...' : 'Registrarme Grátis'}</p>
              </div>
            </button>
          </div>
        </form>
  )
};