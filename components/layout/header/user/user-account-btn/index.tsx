import React, { useRef, useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { HiChevronDown } from "react-icons/hi"
import { Transition } from "react-transition-group"
import UserAccountBox from "./user-account-box"

const UserAccountBtn = () => {
  const [isUserBoxOpen, setIsUserBoxOpen] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null)

  function onClose() {
    setIsUserBoxOpen((prev) => prev && false)
  }

  function onIconClickHandler() {
    setIsUserBoxOpen((prev) => !prev)
  }

  return (
    <div className="relative z-[100]">
      <div className="flex items-center cursor-pointer" onClick={onIconClickHandler}>
        <div className="flex items-center justify-center border text-[14px] font-bold text-white border-[#0a4c7a] w-[24px] h-[24px] rounded-[100rem]">T</div>
        <HiChevronDown color="white" />
      </div>
      <Transition nodeRef={nodeRef} in={isUserBoxOpen} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <>
              <div className="fixed inset-0" onClick={onClose}></div>
              <div ref={nodeRef} className="z-[100] absolute top-full right-0 w-[13rem] p-4 bg-white rounded-lg shadow-lg">
                <UserAccountBox onClose={onClose} />
              </div>
            </>
          )
        }}
      </Transition>
    </div>
  )
}

export default UserAccountBtn
