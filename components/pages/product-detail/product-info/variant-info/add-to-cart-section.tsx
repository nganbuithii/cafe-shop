import React, { memo } from "react"
import { useLanguage } from "hooks/useLanguage"
import { useRouter } from "next/router"
import { flyToCartAnimation } from "helpers/product.helper"
import { useProduct } from "stores/product"
import { useShoppingCart } from "stores/shopping-cart"

const styleActionAmount =
  "text-[16px] disabled:cursor-not-allowed leading-[1.3] font-[600] text-white bg-primary w-[25px] h-[25px] flex items-center justify-center rounded-full border-primary border-[1px]"

const AddToCartSection = () => {
  const { t } = useLanguage()
  const [storeProduct, actionProduct] = useProduct()
  const [, actionShopCart] = useShoppingCart()
  const router = useRouter()

  const handleReduceAmount = () => {
    if (storeProduct.selectedVariant.counter) {
      if (storeProduct.selectedVariant.counter > 1) {
        actionProduct.setProductAmount(storeProduct.selectedVariant.counter - 1)
      } else {
        actionProduct.setProductAmount(1)
      }
    } else {
      actionProduct.setProductAmount(1)
    }
  }
  const handleIncreaseAmount = () => {
    if (storeProduct.selectedVariant.counter) {
      actionProduct.setProductAmount(storeProduct.selectedVariant.counter + 1)
    } else {
      actionProduct.setProductAmount(2)
    }
  }

  const handleAddToCart = async (e: any) => {
    await actionShopCart.addToCart(storeProduct.product, storeProduct.selectedVariant)
    flyToCartAnimation(e)
  }

  const handleBuyNow = async (e: any) => {
    await handleAddToCart(e)
    setTimeout(() => {
      router.push("/shop-cart")
    }, 800)
  }

  return (
    <div className="w-full pb-[5px]">
      <div className="flex items-start flex-col gap-[10px]">
        <div className="mt-5 text-base font-bold tracking-wide text-slate-950">{t.amount}</div>
        <div className="flex items-center">
          <button className={styleActionAmount} disabled={!storeProduct.selectedVariant.counter || storeProduct.selectedVariant.counter === 1} onClick={handleReduceAmount}>
            -
          </button>
          <p className="justify-center items-center self-stretch px-3 text-base tracking-normal leading-2 text-sky-600 whitespace-nowrap rounded-lg">
            {storeProduct.selectedVariant.counter || 1}
          </p>
          <button className={styleActionAmount} onClick={handleIncreaseAmount}>
            +
          </button>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch px-8 mt-5 text-sm leading-5 text-center whitespace-nowrap max-lg:flex-wrap max-lg:px-0 max-lg:max-w-full">
        <button className="grow justify-center items-center px-16 py-2.5 tracking-normal text-white bg-sky-600 rounded-2xl max-lg:px-5" onClick={handleBuyNow}>
          {t.buyNow}
        </button>
        <button
          className="grow justify-center px-11 py-2.5 tracking-widest text-sky-600 rounded-2xl border border-solid border-[color:var(--Light-Primary-Blue-50,#0F75BC)] max-lg:px-5"
          onClick={handleAddToCart}
        >
          {t.addToCart}
        </button>
      </div>
    </div>
  )
}

export default memo(AddToCartSection)
