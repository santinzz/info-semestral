import React from 'react'
import { Advantage } from './Advatage'

export function AdvantagesSection() {
  return (
    <section className='mt-8'>
      <h2 className='font-extrabold text-3xl text-[#191a40] lg:text-4xl lg:mb-2'>¿Porqué nosotros?</h2>
      <p className='text-gray-600 font-bold lg:text-2xl'>
        Deberías elegirnos porque ofrecemos soluciones integrales y eficientes
        que simplifican la gestión de aspectos críticos para tu empresa.
      </p>
      <br />
      <p className='font-bold text-xl lg:text-2xl text-[#191a40]'>Contamos con:</p>
      <ul className='px-2'>
        <Advantage text='Amplia Cobertura.' />
        <Advantage text='Facilidad de uso.' />
        <Advantage text='Ahorro de tiempo.' />
        <Advantage text='Información en tiempo real.' />
        <Advantage text='Experiencia y Confiabilidad.' />
      </ul>
    </section>
  )
}
