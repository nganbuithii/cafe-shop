import React, { memo, useState } from "react"
// import Image from "next/image"
// import { replaceUrlImage } from "helpers/base.helper"
// import { formatCurrency } from "helpers/currency-format.helper"
// import ButtonCustom from "components/common/button"
// import { useLanguage } from "hooks/useLanguage"
import { PRODUCT_MODEL /* PRODUCT_MEDIA_MODEL */ } from "models/product.model"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import RatingStar from "components/common/product-star"
import ModalAddToCart from "components/common/modal-add-to-cart"

import "swiper/swiper-bundle.css"

const Product = ({ item, icons, widthFull }: { item?: PRODUCT_MODEL; icons?: boolean; widthFull?: boolean }) => {
  const [open, setOpen] = useState(false)
  const products: any = [
    {
      image: "/images/product-img/cacao_mockup.png",
      name: "Wowi Cacao"
    },
    {
      image: "/images/product-img/cacao_mockup.png",
      name: "Wowi Cacao"
    },
    {
      image: "/images/product-img/cacao_mockup.png",
      name: "Wowi Cacao"
    },
    {
      image: "/images/product-img/cacao_mockup.png",
      name: "Wowi Cacao"
    }
  ]

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col grow">
          <div className="px-2 pt-3.5 w-full rounded-lg bg-stone-100">
            <Swiper
              className="product-swiper"
              slidesPerGroup={1}
              spaceBetween={30}
              navigation
              pagination
              keyboard={{
                enabled: true
              }}
              loop={true}
              modules={[Navigation, Pagination]}
            >
              {products?.map((item: any, index: number) => {
                return (
                  <SwiperSlide className="bg-transparent" key={index}>
                    {/* eslint-disable-next-line */}
                    <img alt="media" loading="lazy" srcSet="/images/product-img/cacao_mockup.png" className="mx-auto self-center max-w-full aspect-[0.63] w-[106px]" />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="mt-2 text-base tracking-wide text-slate-950">COLDBREW Cà phê</div>
          <RatingStar totalStars={4.5} />
          <div className="mt-2 text-base tracking-wide text-slate-950">220.000đ</div>
          <div className="justify-center items-center py-2.5 mt-2 text-sm tracking-normal leading-5 text-center text-white whitespace-nowrap bg-sky-600 rounded-2xl max-md:px-5">Mua Ngay</div>
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer justify-center items-center py-2.5 mt-2 text-sm tracking-widest leading-5 text-center text-sky-600 whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Light-Primary-Blue-50,#0F75BC)] max-md:px-5"
          >
            Thêm Vào Giỏ
          </div>
        </div>
      </div>
      <ModalAddToCart setOpen={setOpen} open={open} />
    </>
  )
}

export default memo(Product)
