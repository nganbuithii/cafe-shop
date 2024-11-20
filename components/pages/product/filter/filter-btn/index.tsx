import React, { useRef, useEffect, useState } from "react"
import { VscTriangleDown } from "react-icons/vsc"
import { Transition } from "react-transition-group"
import FilterBox from "./filter-box"
import { useLanguage } from "hooks/useLanguage"
import { FILTER_OPTIONS } from "constants/base.constant"
import { useRouter } from "next/router"
import { BsFilterRight } from "react-icons/bs"
import InputCheckbox from "components/common/input-checkbox"
import { IoClose } from "react-icons/io5"

const FilterOptions = () => {
  const { t } = useLanguage()
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false)
  const [isFilterBoxMobileOpen, setIsFilterBoxMobileOpen] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null)
  const nodeMobileRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const filter = router.query.filter

  useEffect(() => {
    document.body.style.overflow = isFilterBoxMobileOpen ? "hidden" : "auto"
  }, [isFilterBoxMobileOpen])

  function onClose() {
    setIsFilterBoxOpen((prev) => prev && false)
  }

  function onIconClickHandler() {
    setIsFilterBoxOpen((prev) => !prev)
  }

  function onCloseMobile() {
    setIsFilterBoxMobileOpen((prev) => prev && false)
  }

  function onIconMobileClickHandler() {
    setIsFilterBoxMobileOpen((prev) => !prev)
  }

  const filterLabel = FILTER_OPTIONS.find((item: any) => item.value === filter)

  return (
    <div className="relative">
      <div className="flex justify-between items-center cursor-pointer gap-3">
        <div className="md:block hidden">{t.filter}</div>
        <div className="flex items-center cursor-pointer gap-3 rounded-[5px] px-[10px] py-[7px] bg-white" onClick={onIconClickHandler}>
          {filter ? t[`${filterLabel?.label}`] : t[`${FILTER_OPTIONS[0].label}`]}
          <VscTriangleDown />
        </div>
        <div className="md:hidden block" onClick={onIconMobileClickHandler}>
          <BsFilterRight size={24} />
        </div>
      </div>
      <Transition nodeRef={nodeRef} in={isFilterBoxOpen} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <>
              <div className="fixed inset-0" onClick={onClose}></div>
              <div ref={nodeRef} className="z-[80] overflow-hidden absolute top-full right-0 md:right-0 w-[216px] bg-white rounded-lg shadow-filter">
                <FilterBox onClose={onClose} />
              </div>
            </>
          )
        }}
      </Transition>
      <Transition nodeRef={nodeMobileRef} in={isFilterBoxMobileOpen} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <>
              <div className="fixed inset-0 z-[99999998] bg-[#ebebeb] opacity-50" onClick={onCloseMobile}></div>
              <div
                ref={nodeMobileRef}
                className="min-w-[294px] fixed top-0 right-0 flex flex-col pb-5 bg-white rounded-lg rounded-e-none max-w-[294px] z-[99999999] md:hidden overflow-hidden"
              >
                <div className="flex flex-col pb-2.5 w-full bg-white text-slate-950">
                  <div className="flex gap-5 justify-between px-[18px] py-2 text-lg font-bold tracking-normal leading-6 bg-[#dbeaf5]">
                    <div>BỘ LỌC</div>
                    <IoClose onClick={onCloseMobile} className="self-start aspect-square" size={24} />
                  </div>
                  <div className="flex flex-col items-start px-[18px] mt-1.5 text-sm tracking-normal">
                    <div className="flex flex-col items-start text-lg tracking-normal leading-7 bg-white text-slate-950">
                      <div className="text-[#0f75bc] text-[16px] font-bold flex items-start md:items-center gap-2 justify-start md:justify-between py-[10px] flex-col md:flex-row capitalize">
                        Danh mục
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
                          <InputCheckbox id={Math.random()} />
                          <span className="md:text-[18px] text-[16px]">Sản phẩm bán sỉ</span>
                        </label>
                        <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
                          <InputCheckbox id={Math.random()} />
                          <span className="md:text-[18px] text-[16px]">Sản phẩm bán lẻ</span>
                        </label>
                      </div>
                      <div className="text-[#0f75bc] text-[16px] font-bold flex items-start md:items-center gap-2 justify-start md:justify-between py-[10px] flex-col md:flex-row capitalize">
                        Loại
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
                          <InputCheckbox id={Math.random()} />
                          <span className="md:text-[18px] text-[16px]">Cà phê</span>
                        </label>
                        <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
                          <InputCheckbox id={Math.random()} />
                          <span className="md:text-[18px] text-[16px]">Mật ong</span>
                        </label>
                        <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
                          <InputCheckbox id={Math.random()} />
                          <span className="md:text-[18px] text-[16px]">Mứt</span>
                        </label>
                        <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
                          <InputCheckbox id={Math.random()} />
                          <span className="md:text-[18px] text-[16px]">Cacao</span>
                        </label>
                        <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
                          <InputCheckbox id={Math.random()} />
                          <span className="md:text-[18px] text-[16px]">Trà</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-center items-center self-center px-16 py-2.5 mt-28 w-full text-base tracking-wide text-center text-white whitespace-nowrap bg-sky-600 rounded-2xl max-w-[255px]">
                  Áp dụng
                </div>
              </div>
            </>
          )
        }}
      </Transition>
    </div>
  )
}

export default FilterOptions
