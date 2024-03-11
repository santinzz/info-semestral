import { Clip } from "./Clip"

type Props = {
  title: string
  description: string
  link: string
  shadowColor: string
  backgroundColor: string
  moreInfoColor: string
}

export function Service({ title, description, link, shadowColor, backgroundColor, moreInfoColor }: Props) {
  return (
    <li className={`border-4 p-3 ${backgroundColor} w-64 rounded-md lg:w-72 shadow-2xl ${shadowColor} relative`}>
      <h4 className='text-center font-extrabold text-lg lg:text-2xl'>{title}</h4>
      <p className='text-center text-balance text-gray-600 font-bold mb-7 lg:text-xl'>
        {description}
      </p>
      <span className={`absolute bottom-0 right-0 mb-3 mr-10 text-[12px] md:text-sm lg:text-lg lg:mb-2 font-bold ${moreInfoColor}`}>
        Conocer mas -{'>'}
      </span>
      <Clip href={link} />
    </li>
  )
}
