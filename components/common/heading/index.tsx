import React from "react"
import Image from "next/image"
import { useMeasurements } from "hooks/useMeasurements"
interface Props {
  title: string
  description?: string
  className?: string
}
/* padding-top: 140%;
    height: 0;
    position: relative; */
const Heading = (props: Props) => {
  const { isMobileSM } = useMeasurements()
  return (
    <div className={`w-full h-auto flex items-center gap-[20px] justify-between relative ${props.className || ""}`}>
      <div className="relative">
        <Image alt="media" loading="lazy" width={isMobileSM ? 25 : 86} height={isMobileSM ? 25 : 86} src="/images/coffee_beans.svg" className="grow w-full" />
      </div>
      <div className="min-w-[230px] w-auto h-auto flex-col justify-start items-center md:gap-2.5 gap-[0px] inline-flex">
        <div className="capitalize text-sky-600 md:text-[40px] sm:text-[30px] xs:text-[25px] font-normal font-['Tapestry'] md:leading-10 leading-none tracking-tight text-center">{props?.title}</div>
        <div className="text-black text-opacity-70 md:text-base sm:text-[20px] xs:text-[12px] font-normal font-['Roboto'] md:leading-tight leading-0 tracking-tight text-center">
          {props?.description}
        </div>
        <div className="sm:w-[170px] w-[100px] h-[0px] md:mt-0 mt-1 sm:border-2 border-[1px] border-[#0F75BC] border-opacity-50"></div>
      </div>
      <div className="relative">
        <Image alt="media" width={isMobileSM ? 25 : 86} height={isMobileSM ? 25 : 86} loading="lazy" src="/images/coffee_beans.svg" className="grow w-full" />
      </div>
    </div>
  )
}

export default Heading
