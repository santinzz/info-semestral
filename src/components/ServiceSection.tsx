import { Service } from "./Service";

export function ServiceSection() {
  return (
    <section className='flex flex-col gap-4 items-center'>
      <h2 className='animate-flip-up text-center text-[#191a40] font-extrabold text-3xl lg:text-4xl'>
        Algunos servicios que ofrecemos
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 gap-12'>
        <Service
          title='NominaTISS-SAT'
          description='Reorganización estratégica para optimizar la gestión fiscal de Recursos Humanos en tu empresa.'
          shadowColor='shadow-sky-700'
          backgroundColor='border-sky-600'
          moreInfoColor='text-sky-700'
          link='https://apsi.com.mx/sistemaDeNomina.html'
        />
        <Service
          title='ApsiVepa'
          description='No tendrá que pagar multas, recargos ni cedulas de diferencia ¡Porque no las habrá!'
          shadowColor='shadow-green-700'
          backgroundColor='border-green-600'
          moreInfoColor='text-green-700'
          link='https://apsi.com.mx/apsiVepa.html'
        />
        <Service
          title='Recursos Humanos'
          description='Nuestro sistema agiliza procesos como solicitudes de empleo, entrevistas, exámenes médicos y bolsa de trabajo.'
          shadowColor='shadow-red-700'
          backgroundColor='border-red-600'
          moreInfoColor='text-red-700'
          link='https://apsi.com.mx/recursosHumanos.html'
        />

        <Service
          title='APSI Check-In-Out'
          description='Verifica la asistencia del personal de manera sencilla y eficiente. Simplifica el seguimiento del ingreso y salida del personal con nuestro sistema web.'
          shadowColor='shadow-yellow-700'
          backgroundColor='border-yellow-600'
          moreInfoColor='text-yellow-700'
          link='https://apsi.com.mx/controlDeAsistencia.html'
        />
      </ul>
    </section>
  )
}
