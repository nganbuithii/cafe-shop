import Link from "next/link"
import React from "react"
import { useLanguage } from "hooks/useLanguage"
import CartItem from "./cart-item"
import { useCartUI } from "stores/cart-ui"
import { useShoppingCart } from "stores/shopping-cart"

const CartBox = () => {
  const { t, locale } = useLanguage()
  const [storeCart] = useShoppingCart()
  const [, actionCartUI] = useCartUI()

  function onCloseCartBoxHandler() {
    actionCartUI.toggleCartBox(false).then()
  }

  return (
    <div className="hidden lg:flex flex-col mt-[10px] px-5 max-h-[90vh] w-full bg-white z-[110] overflow-auto">
      <div className="relative">
        {/* <>
          {storeCart.shoppingCarts?.length ? (
            <div>
              {storeCart.shoppingCarts.map((shopCart, index) => {
                if (shopCart && shopCart.sells?.length > 0) {
                  return shopCart.sells.map((shopCartItem, itemIndex) => {
                    return <CartItem key={`${index}${itemIndex}`} item={shopCartItem} />
                  })
                } else return <></>
              })}{" "}
            </div>
          ) : (
            <div className="w-full h-full min-h-20 flex items-center justify-center">
              <p className="text-center text-primary"> {t.cartIsEmpty} </p>
            </div>
          )}
        </> */}
        <div className="min-h-[82vh] max-h-[82vh]">
          {Array.from({ length: 1 }).map((item: any, index: number) => {
            return <CartItem key={`${index}`} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default CartBox
