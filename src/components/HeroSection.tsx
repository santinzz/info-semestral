import Link from "next/link";

export function HeroSection() {
  return (
    <section className="text-black lg:text-2xl">
      <h2 className='font-extrabold animate-fade-down animate-duration-500 text-center text-3xl mb-2 text-[#191a40] lg:text-4xl'>
        Transforma tu Gestión de Nómina
      </h2>
      <p className='text-center animate-fade-right font-bold text-gray-600'>
        ¡Optimiza la gestión de tu nómina con NominaTISS-SAT!{' '}
        <strong className='font-extrabold text-sky-700'>
          Con 30 años de experiencia
        </strong>
        , garantizamos una administración impecable ante el IMSS, INFONAVIT y
        SAT.
      </p>
      <p className='text-center animate-fade-left font-bold text-gray-600'>
        Simplifica tus procesos y evita errores.
        <Link href='/contact' className='underline-effect underline text-sky-700 font-extrabold'>
          ¡Contactanos Ahora y descubre la diferencia!
        </Link>
      </p>
    </section>
  )
}
