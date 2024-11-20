import React from "react"
import { useLanguage } from "hooks/useLanguage"
import { Transition } from "react-transition-group"

const SearchBar = () => {
  const { t } = useLanguage()
  const [toggle, setToggle] = React.useState(false)
  const nodeRef = React.useRef<HTMLDivElement>(null)

  function onMouseHoverHandler(toggle: boolean) {
    setToggle(toggle)
  }

  return (
    <div
      className="rounded-[5px] rounded-0 p-0 relative cursor-pointer w-[24px] min-h-[24px] h-auto flex-shrink-0 block"
      onMouseOver={() => onMouseHoverHandler(true)}
      onMouseOut={() => onMouseHoverHandler(false)}
    >
      <Transition nodeRef={nodeRef} in={toggle} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <div ref={nodeRef} className="hidden lg:block absolute top-[50%] transform translate-y-[-50%] right-[40px] z-[99] w-[400px] md:bg-bottom-navbar">
              <input className={`bg-white py-[7px] px-[16px] outline-none w-full rounded-[16px] text-[12px]`} type="search" placeholder={`${t.search}`} />
            </div>
          )
        }}
      </Transition>
      <Transition nodeRef={nodeRef} in={toggle} timeout={300} mountOnEnter unmountOnExit>
        <div ref={nodeRef} className="w-full bg-white shadow-lg fixed left-0 md:top-[130px] top-[73px] lg:hidden block px-[20px] py-[10px] pb-[20px]">
          <div className="border-[2px] border-[#0F75BC] pt-[7px] pr-[6px] pb-[7px] pl-[16px] rounded-[4px] flex items-center justify-between">
            <input className="w-full h-full outline-none flex-1 pr-[6px]" type="search" placeholder={`${t.search}`} />
            {/* eslint-disable-next-line */}
            <img src="/images/icons/search-icon-silver.svg" alt="/images/icons/search-icon-silver.svg" className="cursor-pointer w-[24px] h-[24px] relative z-[99] flex-shrink-0" />
          </div>
        </div>
      </Transition>
      {/* eslint-disable-next-line */}
      <img src="/images/icons/search-icon.svg" alt="/images/icons/search-icon.svg" className="cursor-pointer w-[24px] h-[24px] flex-shrink-0 relative z-[99]" />
    </div>
  )
}

export default SearchBar
