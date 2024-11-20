import * as React from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function Pagination(props: any) {
  const pages = Array(Math.ceil(props?.total / props?.perPage))?.map((i) => i)
  const handlePrev = () => {
    if (props?.page !== 0) props.setPage(props?.page - 1)
  }
  const handleNext = () => {
    if (props?.page !== pages.length - 1) props.setPage(props?.page + 1)
  }

  return (
    <div className="flex gap-2.5 justify-center items-center text-base tracking-wide text-black whitespace-nowrap">
      <FaChevronLeft onClick={() => handlePrev()} className={`self-stretch my-auto w-5 aspect-square cursor-pointer`} color={`${props?.page === 0 ? "silver" : "black"}`} />
      <div className="flex gap-2.5 self-stretch px-5">
        {pages.map((item, index) => {
          if ((item <= props?.page + 2 && item >= props?.page - 2) || (item < 5 && props?.page < 2) || (item > pages.length - 6 && props?.page > pages.length - 3))
            return (
              <div
                onClick={() => props?.setPage(item)}
                key={index}
                className={`flex items-center cursor-pointer justify-center px-[12px] py-[6px] rounded aspect-square leading-none ${
                  props?.page === item ? "bg-sky-600 text-neutral-50" : ""
                }`}
              >
                {item + 1}
              </div>
            )
        })}
      </div>
      <FaChevronRight
        onClick={() => handleNext()}
        className="self-stretch my-auto w-5 aspect-square cursor-pointer"
        color={`${props?.page === pages.length - 1 ? "silver" : "black"}`}
      />
    </div>
  )
}

export default Pagination
