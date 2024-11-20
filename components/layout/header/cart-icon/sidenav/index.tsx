import React, { forwardRef } from "react"
import { useRouter } from "next/router"
import { IoClose } from "react-icons/io5"
import CartBox from "../cart-box"
import Link from "next/link"

interface Props {
  state?: string
  onClose: () => void
  children?: React.ReactNode
  ref: React.HTMLProps<HTMLDivElement>
}

const SideNav = forwardRef<HTMLDivElement, Props>(({ state, onClose }, ref) => {
  const { locale } = useRouter()
  return (
    <div
      ref={ref}
      className={`max-w-[480px] w-[90%] h-screen fixed top-0 shadow-md z-[99999999] bg-white origin-right overflow-y-auto right-0 
        ${state === "entering" ? "animate-sidenavRTLEntering" : state === "entered" ? "translate-x-0" : "animate-sidenavRTLExit"}`}
    >
      <div className={`flex items-center justify-between mt-[10px] px-5 `}>
        <div className="flex gap-3 whitespace-nowrap">
          <div className="grow text-xl font-bold leading-8 text-sky-600">GIỎ HÀNG</div>
          <div className="grow self-start mt-4 text-xs tracking-wide leading-4 text-slate-950">1 sản phẩm</div>
        </div>
        <IoClose size={26} className={`cursor-pointer `} onClick={onClose} />
      </div>
      <div className="mt-[10px] px-5">
        <div className="w-full h-[1px] bg-black opacity-50 "></div>
      </div>
      <CartBox />
      <div className="flex flex-col pt-2.5 text-center max-w-[480px] mt-[10px] px-5">
        <div className="flex gap-5 justify-between w-full text-base tracking-wide">
          <div className="text-slate-950">Tạm Tính</div>
          <div className="font-bold text-slate-950">220.000 vnd</div>
        </div>
        <Link href={`/shopping-cart`}>
          <a
            onClick={onClose}
            className="cursor-pointer justify-center items-center px-16 py-1.5 mt-2.5 w-full text-lg tracking-normal leading-7 whitespace-nowrap bg-sky-600 rounded text-neutral-50"
          >
            Xem tất cả
          </a>
        </Link>
      </div>
    </div>
  )
})

SideNav.displayName = "SideNav"

export default SideNav
