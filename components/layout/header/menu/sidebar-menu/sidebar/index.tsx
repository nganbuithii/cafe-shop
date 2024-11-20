import React, { useEffect, useRef } from "react"
import { Transition } from "react-transition-group"
import SideNav from "./sidenav"
import { useSideNavBar } from "stores/side-nav-bar"

const SideBar = () => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [storeSideNavBar, actionSideNavBar] = useSideNavBar()
  const closeNav = () => actionSideNavBar.closeNavbar()

  const openNavBar = () => actionSideNavBar.openNavbar()

  useEffect(() => {
    document.body.style.overflow = storeSideNavBar.isNavbarOpen ? "hidden" : "auto"
  }, [storeSideNavBar.isNavbarOpen])

  return (
    <div className="md:hidden">
      <div onClick={openNavBar}>
        {/* eslint-disable-next-line */}
        <img src="/images/icons/bars-icon.svg" alt="/images/icons/bars-icon.svg" className="cursor-pointer w-[24px] h-[23px] transform translate-y-[2px]" />
      </div>
      <Transition nodeRef={nodeRef} in={storeSideNavBar.isNavbarOpen!} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <>
              <SideNav ref={nodeRef} state={state} onClose={closeNav} />
              <div
                className={`fixed inset-0 z-[999] bg-black/60
                  ${state === "entering" ? "animate-fadeEntering" : state === "entered" ? "opacity-100" : "animate-fadeExit"}
                  `}
                onClick={closeNav}
              />
            </>
          )
        }}
      </Transition>
    </div>
  )
}

export default SideBar
