import React from "react"
import Link from "next/link"
import Image from "next/image"
import { HiChevronUp, HiChevronDown } from "react-icons/hi"
import { useSideNavBar } from "stores/side-nav-bar"
import { WHOLESALE_PRODUCT, RETAIL_PRODUCT } from "constants/menu.constant"
import { DEFAULT_EMAIL, DEFAULT_LANGUAGE, DEFAULT_PHONE_NUMBER } from "constants/base.constant"
import { useLanguage } from "hooks/useLanguage"
import { ADDRESS_LIST } from "constants/footer.constant"

const SideNavContent = () => {
  const [, actionSideNavBar] = useSideNavBar()
  const [openDropdown, setOpenDropDown] = React.useState(false)
  const nodeRef = React.useRef<HTMLDivElement>(null)
  let ArrowDirection = !openDropdown ? HiChevronDown : HiChevronUp
  const { t, locale } = useLanguage()

  const closeNavbar = () => actionSideNavBar.closeNavbar()

  return (
    <div className="absolute w-full">
      <div className="flex flex-col mt-3 px-5 cursor-pointer">
        <hr className="mt-0 mb-4 border-gray-200" />
        <h2 className="text-[20px] leading-[24px] font-[500] mb-[10px] text-[#050226]">Sản phẩm bán sỉ</h2>
        {WHOLESALE_PRODUCT.length > 0 &&
          WHOLESALE_PRODUCT.map((menu: any, index: number) => {
            return (
              <Link href={menu.link_url || ""} key={index}>
                <a className="text-md grow text-black rounded-[5px] mb-[8px]">{menu.title[locale || DEFAULT_LANGUAGE]}</a>
              </Link>
            )
          })}
        <hr className="mt-0 mb-4 border-gray-200" />
        <h2 className="text-[20px] leading-[24px] font-[500] mb-[10px] text-[#050226]">Sản phẩm bán lẻ</h2>
        {RETAIL_PRODUCT.length > 0 &&
          RETAIL_PRODUCT.map((menu: any, index: number) => {
            return (
              <Link href={menu.link_url || ""} key={index}>
                <a className="text-md grow text-black rounded-[5px] mb-[8px]">{menu.title[locale || DEFAULT_LANGUAGE]}</a>
              </Link>
            )
          })}
        {/* <div
          className="cursor-pointer flex items-center justify-between py-3 text-black bg-item rounded-[5px] px-[19px] my-[7.5px]"
          onClick={() => setOpenDropDown((prevState) => !prevState)}
        >
          <h3 className="ltr:mr-3 rtl:ml-3 text-md grow">{t.collaborators}</h3>
          <ArrowDirection style={{ fontSize: "1.5rem" }} />
        </div>
        <Transition mountOnEnter unmountOnExit in={openDropdown} timeout={300} nodeRef={nodeRef}>
          {(state) => (
            <>
              <div ref={nodeRef} className={`origin-top ${state === "entering" ? `animate-dropDown` : state === "entered" ? "scale-y-100 opacity-100" : "animate-dropDownExit"}`}>
                <div className="ltr:pl-6 rtl:pr-6 py-3">
                  <Link href="/cong-tac-vien/chinh-sach">
                    <a onClick={closeNavbar}>{t.policyForCollaborators}</a>
                  </Link>
                </div>
                <div className="ltr:pl-6 rtl:pr-6 py-3">
                  <Link href="/cong-tac-vien/dang-ky">
                    <a onClick={closeNavbar}>{t.registerAsACollaborator}</a>
                  </Link>
                </div>
              </div>
            </>
          )}
        </Transition> */}
        {/*  */}
        {/*  */}
        {/* <div className="mt-2 md:mt-0 max-w-[350px] w-full">
          <h2 className="text-[18px] font-semibold pb-2 inline-block max-w-max">{t.contactInformation}</h2>
          <div className="flex flex-col">
            <Link href={`mailto:${DEFAULT_EMAIL}`}>
              <a className="text-[14px] text-justify text-black py-2 hover:underline">
                <span className="font-bold">Email:</span> {DEFAULT_EMAIL}
              </a>
            </Link>
            <Link href={`tel:${DEFAULT_PHONE_NUMBER}`}>
              <a className="text-[14px] text-justify text-black py-2 hover:underline">
                <span className="font-bold">{t.phoneNumber}:</span> {DEFAULT_PHONE_NUMBER}
              </a>
            </Link>
            {ADDRESS_LIST.length > 0 &&
              ADDRESS_LIST.map((address, index) => {
                return (
                  <a className="text-[14px] text-justify text-black py-2" key={index}>
                    <span className="font-bold">
                      {t.address} {index + 1}:
                    </span>{" "}
                    {locale === "en" ? address.titleEn : address.titleVi}
                  </a>
                )
              })}
          </div>
        </div> */}
        {/*  */}
        {/* <hr className="mt-6 mb-4 border-gray-200" />
        <div className="py-1 flex items-center justify-start h-[40px] gap-4">
          <a href="https://cafedx.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/shopee-icon.svg" alt="/images/icons/shopee-icon.svg" className="cursor-pointer w-[40px] h-[40px]" />
          </a>
          <a href="https://cafedx.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/lazada-icon.svg" alt="/images/icons/lazada-icon.svg" className="cursor-pointer w-[24px] h-[24px]" />
          </a>
          <div className="w-[1px] h-full bg-[#346448]"></div>
          <a href="https://cafedx.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/facebook-icon.svg" alt="/images/icons/facebook-icon.svg" className="cursor-pointer w-[24px] h-[24px]" />
          </a>
          <a href="https://cafedx.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/instagram-icon.svg" alt="/images/icons/instagram-icon.svg" className="cursor-pointer w-[24px] h-[24px]" />
          </a>
          <a href="https://cafedx.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/youtube-icon.svg" alt="/images/icons/youtube-icon.svg" className="cursor-pointer w-[24px] h-[24px]" />
          </a>
          <a href="https://cafedx.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/tiktok-icon.svg" alt="/images/icons/tiktok-icon.svg" className="cursor-pointer w-[24px] h-[24px]" />
          </a>
        </div> */}
        <div className="mt-[20px]"></div>
        <Image src={"/images/sidenav_footer.png"} width={202} height={234} objectFit="contain" priority={true} alt="media" />
      </div>
    </div>
  )
}

export default SideNavContent
