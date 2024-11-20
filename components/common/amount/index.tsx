import React, { memo } from "react"
import { useLanguage } from "hooks/useLanguage"
import { useRouter } from "next/router"
import { flyToCartAnimation } from "helpers/product.helper"
import { useProduct } from "stores/product"
import { useShoppingCart } from "stores/shopping-cart"

const styleActionAmount =
  "text-[16px] disabled:cursor-not-allowed leading-[1.3] font-[600] text-white bg-primary w-[25px] h-[25px] flex items-center justify-center rounded-full border-primary border-[1px]"

const Amount = () => {
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
    </div>
  )
}

export default memo(Amount)
