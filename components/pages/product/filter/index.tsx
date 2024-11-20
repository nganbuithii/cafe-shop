import React, { memo } from "react"
import { useLanguage } from "hooks/useLanguage"
import FilterOptions from "./filter-btn"
import InputCheckbox from "components/common/input-checkbox"

const ProductFilter = ({ totalRecord }: { totalRecord: number }) => {
  const { t } = useLanguage()

  return (
    <div className="container">
      <div className="text-[#0f75bc] text-[20px] font-bold flex items-start md:items-center gap-2 justify-start md:justify-between md:pt-[20px] pb-[20px] pt-[12px] flex-col md:flex-row md:px-0 capitalize">
        Ngành hàng
      </div>
      <div className="flex md:gap-[40px] gap-[8px] justify-start self-stretch py-2.5 pr-20 pl-2.5 text-base tracking-wide text-black whitespace-nowrap bg-white rounded-lg max-md:flex-wrap max-md:pr-5">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          {/* eslint-disable-next-line */}
          <img loading="lazy" srcSet="/images/icons/filter-icon/ic-coffee.svg" className="self-center aspect-square md:w-[62px] w-[40px]" />
          <div className="mt-2.5 text-[16px]">Cà Phê</div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          {/* eslint-disable-next-line */}
          <img loading="lazy" srcSet="/images/icons/filter-icon/ic-tea.svg" className="aspect-square md:w-[62px] w-[40px]" />
          <div className="mt-2.5 text-[16px]">Trà</div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          {/* eslint-disable-next-line */}
          <img loading="lazy" srcSet="/images/icons/filter-icon/ic-cacao.svg" className="self-center aspect-square md:w-[62px] w-[40px]" />
          <div className="mt-2.5 text-[16px]">Cacao</div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          {/* eslint-disable-next-line */}
          <img loading="lazy" srcSet="/images/icons/filter-icon/ic-honey.svg" className="self-center aspect-square md:w-[62px] w-[40px]" />
          <div className="mt-2.5 text-[16px]">Mật ong</div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          {/* eslint-disable-next-line */}
          <img loading="lazy" srcSet="/images/icons/filter-icon/ic-fruit.svg" className="aspect-square md:w-[62px] w-[40px]" />
          <div className="mt-2.5 text-[16px]">Mứt</div>
        </div>
      </div>
      <div className="text-[#0f75bc] text-[20px] font-bold md:flex hidden items-start md:items-center gap-2 justify-start md:justify-between py-[20px] flex-col md:flex-row md:px-0 capitalize">
        Danh mục
      </div>
      <div className="md:flex hidden flex-col items-start p-2.5 text-lg tracking-normal leading-7 bg-white text-slate-950">
        <div className="flex gap-[33px] max-md:gap-[14px] max-md:flex-wrap justify-between whitespace-nowrap">
          <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
            <InputCheckbox id={Math.random()} />
            <span className="md:text-[18px] text-[16px]">Sản phẩm bán sỉ</span>
          </label>
          <label className="checkbox-customize flex items-center gap-2 cursor-pointer">
            <InputCheckbox id={Math.random()} />
            <span className="md:text-[18px] text-[16px]">Sản phẩm bán lẻ</span>
          </label>
        </div>
        <div className="shrink-0 w-full h-[1px] bg-[#050226] opacity-50 self-stretch mt-5 max-md:max-w-full" />
        <div className="flex gap-[33px] max-md:gap-[14px] mt-5 max-md:flex-wrap max-md:max-w-full">
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
      <div className="text-[#050226] flex items-center gap-[15px] md:justify-between py-[20px] flex-row justify-between">
        <div>
          {totalRecord || 0} {t.products}
        </div>
        <FilterOptions />
      </div>
    </div>
  )
}

export default memo(ProductFilter)
