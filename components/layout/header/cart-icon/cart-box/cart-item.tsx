import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { HiMinusSm, HiOutlinePlusSm, HiOutlineTrash } from "react-icons/hi"
import { useLanguage } from "hooks/useLanguage"
import { SHOP_CART_ITEM_MODEL } from "models/shopping-cart.model"
import { useShoppingCart } from "stores/shopping-cart"
import { replaceUrlImage } from "helpers/base.helper"
import Amount from "components/common/amount"
interface Props {
  item: SHOP_CART_ITEM_MODEL
}
const CartItem: React.FC<Props> = ({ item }) => {
  const [, actionCart] = useShoppingCart()
  const [counter, setCounter] = useState(item?.number)
  const { t } = useLanguage()
  const newComponent = true

  function increment() {
    setCounter((prev: any) => ++prev!)
    item.variant.counter = (item.variant.counter || 1) + 1
    actionCart.addToCart(item.product, item.variant).then()
  }

  function decrement() {
    if (counter > 1) {
      item.variant.counter = counter - 1
    } else {
      item.variant.counter = 1
    }
    setCounter(item.variant.counter)
    actionCart.addToCart(item.product, item.variant, true).then()
  }

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value)
    }
  }
  if (newComponent) {
    return (
      <div className="self-stretch max-w-[480px] mb-[30px]">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-center items-center p-[13px] w-full rounded-lg bg-zinc-100">
              {/* eslint-disable-next-line */}
              <img alt="media" loading="lazy" srcSet="/images/product-img/cacao_mockup.png" className="aspect-[0.63] w-[50px]" />
            </div>
          </div>
          <div className="flex flex-col ml-[12px] w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow">
              <div className="flex gap-5 justify-between pr-5">
                <div className="flex-auto text-base tracking-wide text-slate-950">COLDBREW Cà phê</div>
                <div className="cursor-pointer justify-center h-[20px] text-[14px] tracking-normal text-black whitespace-nowrap border-b border-solid aspect-[1.25] border-b-[color:var(--Light-Secondary-purple-10,#050226)]">
                  Xóa
                </div>
              </div>
              <div className="flex gap-5 justify-between pr-5 mt-6">
                <div className="flex flex-col">
                  <div className="mt-5 text-base font-bold tracking-wide text-slate-950 mb-[10px]">{t.amount}</div>
                  <Amount />
                </div>
                <div className="self-end mt-11 text-base font-bold tracking-wide text-center text-slate-950">220.000 vnd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-center flex-wrap sm:my-4 sm:py-4 px-2 border-b-2">
      <div className="lg:w-1/2 sm:min-w-[290px]">
        <Link href={`/product/${item.product?.name_display}`}>
          <a className="flex flex-wrap sm:flex-nowrap justify-center items-center flex-grow">
            <div className="sm:min-w-[100px] md:min-w-[130px]">
              <Image src={replaceUrlImage(item.variant?.image_url || "")} width={200} height={200} alt={item.product?.name_display} objectFit="cover" />
            </div>
            <div className="flex-grow text-sm font-normal mb-2 sm:mb-0 mx-2 w-full" style={{ direction: "ltr" }}>
              {item.product?.name_display}
            </div>
          </a>
        </Link>
      </div>
      <div className="flex flex-wrap flex-grow md:items-center mb-4 sm:mb-0">
        <div className="flex-grow my-2 sm:my-0">
          <div className="flex items-center justify-start lg:justify-center cursor-pointer">
            <div className="p-2" onClick={() => increment()}>
              <HiOutlinePlusSm style={{ fontSize: "1rem" }} />
            </div>
            <input className="inline-block w-[65px] rtl:pr-7 ltr:pl-7 py-2 mx-1 border-[1px] border-gray-400" type="number" min={1} max={10} value={counter} onChange={onInputNumberChangeHandler} />
            {counter === 1 ? (
              <div onClick={() => decrement()} className="p-1">
                <HiOutlineTrash style={{ fontSize: "1.3rem", color: "red" }} />
              </div>
            ) : (
              <div onClick={() => decrement()} className="p-1">
                <HiMinusSm style={{ fontSize: "1rem" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
