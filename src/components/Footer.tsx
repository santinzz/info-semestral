export function Footer() {
  return (
    <footer className='mt-8 bg-[#ccc] p-2 text-[#222] flex flex-col gap-4 lg:flex-row lg:justify-center'>
      <div>
        <h5 className='text-xl font-bold'>Soluciones Empresariales</h5>
        <p className='text-gray-600 font-bold'>
          © 2024 Todos los derechos reservados
        </p>
      </div>

      <div className="text-gray-600 font-bold">
        <p>Aristoteles 1313 Col.Tecnologico</p>
        <p>CP 27000 Torreon Coahuila</p>	
        <p className='text-[#222] text-lg'>Contacto:</p>
        <p>+52-866-148-6390</p>
        <p>+52-866-120-3040</p>
        <p>claudia.alonso83@hotmail.com</p>
      </div>
    </footer>
  )
}
