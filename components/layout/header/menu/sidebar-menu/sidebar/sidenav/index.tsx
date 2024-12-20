import React, { forwardRef } from "react"
import { useRouter } from "next/router"
import { IoCloseCircleOutline } from "react-icons/io5"
import SideNavContent from "./sidenav-content"
// import Logo from "../../Logo"
// import CartIcon from "../../../../cart/CartIcon"
import dynamic from "next/dynamic"

const UserBox = dynamic(() => import("components/layout/header/user"), {
  ssr: false
})

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
      className={`max-w-[380px] w-[90%] h-screen fixed top-0 shadow-md z-[10000] bg-white origin-right overflow-y-auto right-0 
        ${state === "entering" ? "animate-sidenavRTLEntering" : state === "entered" ? "translate-x-0" : "animate-sidenavRTLExit"}`}
    >
      <div className={`flex items-center justify-between mt-[10px] px-5`}>
        <p className="font-bold text-[20px]">Danh mục</p>
        <IoCloseCircleOutline size={26} className={`cursor-pointer `} onClick={onClose} />
      </div>
      <SideNavContent />
    </div>
  )
})

SideNav.displayName = "SideNav"

export default SideNav
