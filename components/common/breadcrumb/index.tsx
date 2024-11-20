import React from "react"
import Link from "next/link"
import { useLanguage } from "hooks/useLanguage"

interface Props {
  breadcrumb: any
  className?: string
}

const Breadcrumb = (props: Props) => {
  const { t } = useLanguage()
  return (
    <div className={`flex breadcrumb flex-wrap py-2 ${props.className ? props.className : ""}`}>
      <div
        className="flex flex-wrap items-center 
      text-[14px] md:text-[20px] font-bold text-slate-950 opacity-70 md:items-center 
      justify-start md:justify-between"
      >
        <Link prefetch={false} legacyBehavior href={"/"}>
          <a className={`justify-center py-2 whitespace-nowrap`}>{t["Home page"]}</a>
        </Link>
        {props?.breadcrumb.map((data: any, index: number) => {
          return (
            <div key={index} className={"flex"}>
              <div className="px-[8px] flex">
                {/* eslint-disable-next-line */}
                <img
                  loading="lazy"
                  alt="media"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/779fe5bcf83d0a6184c9085745b45797dff86d1d856ea7f4f815e0e99ea6a8f9?"
                  className="my-auto w-4 aspect-square md:w-6"
                />
              </div>
              <Link prefetch={false} legacyBehavior href={data.href}>
                <a className={`grow justify-center max-md:text-[14px]`}>{data.title}</a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Breadcrumb
