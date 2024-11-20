import React, { useEffect, useRef } from "react"
import { Transition } from "react-transition-group"
import { useCartUI } from "stores/cart-ui"
import { useShoppingCart } from "stores/shopping-cart"
import SideNav from "./sidenav"

const CartIcon = () => {
  const [storeCartUI, actionCartUI] = useCartUI()
  const [storeCart] = useShoppingCart()

  const nodeRef = useRef<HTMLDivElement>(null)

  const closeCart = () => actionCartUI.toggleCartBox(false)

  useEffect(() => {
    document.body.style.overflow = storeCartUI.cartBoxIsVisible ? "hidden" : "auto"
  }, [storeCartUI.cartBoxIsVisible])

  return (
    <>
      <div className="relative" id="cartIconJs" onClick={() => actionCartUI.toggleCartBox(true)}>
        <div className="relative flex items-center mx-[10px] z-50 w-[24px] h-[24px]" id="cartIconJs">
          {/* eslint-disable-next-line */}
          <img src="/images/icons/cart-icon.svg" alt="/images/icons/cart-icon.svg" className="cursor-pointer w-[24px] h-[24px]" />
          <span className="absolute -top-[8px] -right-[8px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-white text-[12px] font-[600] leading-[1.3] text-primary shadow-lg">
            {storeCart.totalQuantity || 0}
          </span>
        </div>
        {/* <div ref={nodeRef} className="z-[100]">
              <CartBox />
            </div> */}
      </div>
      <Transition nodeRef={nodeRef} in={storeCartUI.cartBoxIsVisible} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <>
              <SideNav ref={nodeRef} state={state} onClose={closeCart} />
              <div
                className={`fixed inset-0 z-[9999999] bg-black/60
                  ${state === "entering" ? "animate-fadeEntering" : state === "entered" ? "opacity-100" : "animate-fadeExit"}
                  `}
                onClick={closeCart}
              />
            </>
          )
        }}
      </Transition>
    </>
  )
}

export default CartIcon
