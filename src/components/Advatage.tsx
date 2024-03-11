import { CheckMark } from "./CheckMark";

export function Advantage({text}: {text: string}) {
  return (
    <li className='flex gap-2 items-center lg:text-xl'>
      <CheckMark className='w-8 h-auto lg:w-12' />
      <p className="font-bold text-[#191a40]">{text}</p>
    </li>
  )
}
