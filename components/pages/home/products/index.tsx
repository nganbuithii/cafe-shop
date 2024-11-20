import React, { Fragment, memo } from "react"
import Heading from "components/common/heading"
import { HiOutlineChevronDoubleRight } from "react-icons/hi"
import Product from "components/common/product"

const HomeProducts = () => {
  return (
    <div className="bg-neutral-50 md:py-[30px] py-[20px] md:border-none border-y border-[#e1e1e1]">
      <div className="container">
        <Heading title="Sản phẩm" description="Ghé shop để xem sản phẩm tuyệt vời" />
        <div className="max-w-[400px] mx-auto flex pt-[25px] gap-[20px] md:gap-[30px] justify-center text-lg tracking-normal leading-7 whitespace-nowrap text-slate-950 flex-wrap">
          <div className="justify-center sm:text-[18px] text-[15px] cursor-pointer font-bold text-sky-600">Cà phê</div>
          <div className="justify-center sm:text-[18px] text-[15px] cursor-pointer">Mứt</div>
          <div className="justify-center sm:text-[18px] text-[15px] cursor-pointer">Cacao</div>
          <div className="justify-center sm:text-[18px] text-[15px] cursor-pointer">Mật Ong</div>
          <div className="justify-center sm:text-[18px] text-[15px] cursor-pointer">Trà</div>
        </div>
        <div className="flex flex-col mt-[20px]">
          <div className="md:flex items-center hidden gap-2.5 self-end text-base tracking-wide text-sky-600 cursor-pointer mb-[14px]">
            <div>Xem tất cả</div>
            <HiOutlineChevronDoubleRight color={"#0F75BC"} size={20} />
          </div>
          <div className="w-full max-md:max-w-full">
            <div className="gap-[30px] max-md:gap-[20px] grid max-md:grid-cols-2 grid-cols-4">
              {Array.from({ length: 4 }).map((item: any, index: number) => {
                return (
                  <Fragment key={index}>
                    <Product />
                  </Fragment>
                )
              })}
            </div>
          </div>
          <div className="flex items-center md:hidden gap-2.5 mt-[20px] mx-auto self-end text-base tracking-wide text-sky-600 cursor-pointer">
            <div>Xem tất cả</div>
            <HiOutlineChevronDoubleRight color={"#0F75BC"} size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(HomeProducts)
