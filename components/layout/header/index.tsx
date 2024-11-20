import React, { useEffect } from "react"
import dynamic from "next/dynamic"
import Menu from "./menu"
import Logo from "./logo"
import SearchBar from "./search-bar"
import CartIcon from "./cart-icon"
import Language from "./language"
import MegaMenu from "./menu/mega-menu"
import { useAuth } from "stores/auth"
import ModalLogin from "components/common/modal/components/ModalLogin/ModalLogin"
import { useLanguage } from "hooks/useLanguage"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useShoppingCart } from "stores/shopping-cart"

const UserBoxTopBar = dynamic(() => import("./user/topBar"), {
  ssr: false
})
const UserBox = dynamic(() => import("./user"), {
  ssr: false
})

interface Props {
  isDetailScreen: boolean
}

const Header = ({ isDetailScreen = false }: Props) => {
  const router = useRouter()
  const { t } = useLanguage()
  const [stateAuth, actionAuth] = useAuth()
  const [, actionShopCart] = useShoppingCart()

  useEffect(() => {
    actionShopCart.getShoppingCarts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    actionAuth.showModalAuth("login").then()
  }

  const handleRouterBack = () => router.back()

  return (
    <>
      <header className="md:block hidden w-full">
        <div className="w-full h-[40px] bg-dark-primary relative border-b border-white">
          <div className="h-full flex items-center justify-between px-0 w-[90%] mx-[auto]">
            <a className="text-white text-[15px] lg:text-[16px] font-normal py-[5px] text-center hidden md:block" href="mailto:wowivietnam@gmail.com">
              {t.email}: wowivietnam@gmail.com
            </a>
            <div className="hidden md:flex md:items-center md:justify-between relative z-[99999]">
              <UserBoxTopBar />
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block w-full bg-menu">
          <div className="text-white flex items-center justify-end w-[90%] gap-[30px] py-[19px] mx-[auto]">
            <div className="text-[15px] lg:text-[16px] text-primary cursor-pointer">{t.orderTracking}</div>
            <div className="text-[15px] lg:text-[16px] text-primary cursor-pointer">{t.contactUs}</div>
            <div className="text-[15px] lg:text-[16px] text-primary cursor-pointer"></div>
          </div>
        </div> */}
      </header>
      <div className="w-full sticky py-0 md:py-[10px] top-0 z-[999999] bg-primary lg:shadow-header-desktop shadow-header">
        <div className="flex flex-col px-0 lg:w-[90%] mx-[auto]">
          <div className={`w-full flex items-center justify-between md:order-2 h-[73px] md:hidden ${!isDetailScreen ? "px-[20px]" : ""}`}>
            {isDetailScreen && (
              <>
                <button className="flex items-center justify-center w-[73px] h-full" onClick={handleRouterBack}>
                  <Image src="/images/icons/ic-arrow-left.svg" alt="backIcon" width={35} height={35} objectFit="cover" />
                </button>
                <div className="md:hidden">
                  <Logo />
                </div>
                <div className="w-[73px] h-full" />
              </>
            )}
            {!isDetailScreen && (
              <>
                <div className="md:hidden">
                  <Logo />
                </div>
                <div className="h-full flex items-center justify-between">
                  <Language />
                  <div className="md:hidden flex items-center md:ml-[15px] md:mr-[5px] ml-[10px] mr-[0px] md:mx-0">
                    <SearchBar />
                  </div>
                  <CartIcon />
                  <Menu />
                </div>
              </>
            )}
          </div>
          <div className="mt-0 flex items-center md:order-1">
            <div className="hidden md:block">
              <Logo />
            </div>
            <div className="ml-[30px] lg:ml-[60px] flex-grow">
              <MegaMenu />
            </div>
            <div className="hidden md:flex ltr:ml-2 rtl:mr-2 sm:ltr:ml-4 sm:rtl:mr-4 items-center justify-between gap-[10px] lg:gap-[13px]">
              <SearchBar />
              <CartIcon />
              <Language />
              <UserBox />
            </div>
          </div>
        </div>
      </div>
      {!stateAuth.isLogin && <ModalLogin status={stateAuth.isModalLogin} close={handleClose} />}
    </>
  )
}

export default Header
