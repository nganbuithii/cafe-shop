import React, { useState } from "react"
import { useLanguage } from "hooks/useLanguage"
import { useProduct } from "stores/product"
import ProductRatingStar from "components/common/product-rating-star"
import CountDownFlashSale from "components/common/count-down-flash-sale"
import { formatCurrency } from "helpers/currency-format.helper"
import { COMBO_SPECIAL_TAG, COMBO_TAG, COMBO_TYPE, DEAL_SHOCK_GIFT_TAG, FLASH_SALE_STATUS, PRODUCT_DEAL_SHOCK_TYPE } from "constants/promotion.constant"
import { DEFAULT_LANGUAGE } from "constants/base.constant"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Mousewheel, Swiper as SwiperOther } from "swiper"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"
import RatingStar from "components/common/product-star"
import AddToCartSection from "./add-to-cart-section"

import "swiper/css"

const promotionTagClass = "border-price-active lg:px-[6px] lg:py-[4px] px-[7px] py-[5px] text-[12px] leading-[1] w-fit text-price-active mt-[10px] rounded-[3px] lg:font-[500] font-[600]"

const TopInfoSection = () => {
  const { t, language } = useLanguage()
  const [storeProduct] = useProduct()
  const [imagesNavSlider, setImagesNavSlider] = useState<SwiperOther | null>(null)
  const flashSalePromotionPrice = 0
  const newLayout = true

  const slides = [
    "/images/product-img/mockup/thumb_1.png",
    "/images/product-img/mockup/thumb_1.png",
    "/images/product-img/mockup/thumb_1.png",
    "/images/product-img/mockup/thumb_2.png",
    "/images/product-img/mockup/thumb_3.png",
    "/images/product-img/mockup/thumb_4.png"
  ]

  const renderOtherPromotions = () => {
    const promotions = storeProduct.promotions
    if (storeProduct.promotions) {
      if (promotions.deal_shock) {
        if (promotions.deal_shock.type === PRODUCT_DEAL_SHOCK_TYPE.buy_with_shock_deal_discount) {
          return <p className={promotionTagClass}>{t.buyTogetherWithAShockDeal}</p>
        } else if (promotions.deal_shock.type === PRODUCT_DEAL_SHOCK_TYPE.buy_with_shock_deal_gift) {
          if (promotions.deal_shock.base_price > 0) {
            return <p className={promotionTagClass}>{t.buyToGetAGift}</p>
          } else if (promotions?.deal_shock?.quantity_limit > 0) {
            return <p className={promotionTagClass}>{DEAL_SHOCK_GIFT_TAG(promotions?.deal_shock?.quantity_limit, promotions?.deal_shock?.gift_limit)[language]}</p>
          }
        }
      } else {
        if (promotions.combo) {
          if (promotions.combo.sub_type === COMBO_TYPE.DISCOUNT_WITH_RATE) {
            return <p className={promotionTagClass}>{COMBO_TAG(promotions?.combo.quantity, `${promotions?.combo.rate}%`)[language]}</p>
          } else if (promotions.combo.sub_type === COMBO_TYPE.DISCOUNT_WITH_PRICE) {
            return <p className={promotionTagClass}>{COMBO_TAG(promotions?.combo.quantity, formatCurrency(promotions.combo.value || 0))[language]}</p>
          } else if (promotions.combo.sub_type === COMBO_TYPE.DISCOUNT_SPECIAL) {
            return <p className={promotionTagClass}>{COMBO_SPECIAL_TAG(promotions?.combo.quantity, formatCurrency(promotions.combo.value || 0))[language]}</p>
          }
        }
      }
    }
  }

  if (newLayout) {
    return (
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="w-[59%] max-lg:w-1/2 max-md:ml-0 max-md:w-full h-full">
          <div className="swiper-container-wrapper h-[670px] max-md:h-[410px] max-xs:h-[380px]">
            <div className="swiper-container gallery-thumbs h-full">
              <Swiper
                className="swiper-wrapper"
                onSwiper={setImagesNavSlider}
                direction="vertical"
                spaceBetween={24}
                slidesPerView={4}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  },
                  450: {
                    spaceBetween: 10,
                    slidesPerView: 3
                  },
                  768: {
                    spaceBetween: 10,
                    slidesPerView: 4
                  }
                }}
                modules={[Navigation, Thumbs]}
              >
                {slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {/* eslint-disable-next-line */}
                      <img src={slide} alt="" />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div className="swiper-button-next">
                <FaChevronRight color="black" size={24} />
              </div>
              <div className="swiper-button-prev">
                <FaChevronLeft color="black" size={24} />
              </div>
            </div>

            <div className="swiper-container gallery-top">
              <Swiper
                className="swiper-wrapper"
                thumbs={{ swiper: imagesNavSlider && !imagesNavSlider.destroyed ? imagesNavSlider : null }}
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={32}
                mousewheel={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }}
                breakpoints={{
                  0: {
                    direction: "horizontal"
                  },
                  768: {
                    direction: "horizontal"
                  }
                }}
                modules={[Navigation, Thumbs, Mousewheel]}
              >
                {slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {/* eslint-disable-next-line */}
                      <img src={slide} alt="" className="object-contain w-full h-full" />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[41%] max-lg:w-1/2 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
            <div className="flex flex-col justify-center px-[20px] py-[30px] bg-white rounded-[8px] max-md:max-w-full">
              <div className="flex flex-col items-start max-md:max-w-full">
                <div className="text-xl font-bold leading-8 whitespace-nowrap text-slate-950">COLDBREW Cà phê ( 5kg ) </div>
                <div className="flex gap-2.5 mt-2.5">
                  <RatingStar totalStars={4.5} />
                  <div className="flex-auto my-auto text-xs tracking-wider leading-3 text-slate-950">(600)</div>
                </div>
                <div className="mt-5 text-base font-bold tracking-wide text-slate-950">Danh Mục</div>
                <div className="mt-2.5 text-sm tracking-normal leading-5 whitespace-nowrap text-slate-950">Sản Phẩm Bán Sỉ</div>
                <div className="mt-5 text-base font-bold tracking-wide text-slate-950">Phân Loại</div>
                <div className="flex gap-4 mt-2.5 text-sm tracking-widest leading-5 text-center whitespace-nowrap">
                  <div className="grow justify-center px-4 py-2 bg-sky-600 rounded text-neutral-50">Nguyên Hạt</div>
                  <div className="grow justify-center px-8 py-2 text-sky-600 rounded border border-solid border-[color:var(--Light-Primary-Blue-50,#0F75BC)] max-md:px-5">Xay Sẵn</div>
                </div>
                <div className="mt-5 text-base font-bold tracking-wide text-slate-950">Giá</div>
                <div className="mt-2.5 text-xl font-bold leading-8 text-orange-600 whitespace-nowrap">1.220.000 vnd</div>
                <AddToCartSection />
              </div>
            </div>
            <div className="mt-5 text-xl font-bold leading-8 text-sky-600 max-lg:max-w-full">Chính Sách Tại Wowi Việt Nam</div>
            <div className="flex gap-3 pr-2.5 mt-5 text-xs tracking-wide leading-4 text-center text-slate-950 max-lg:flex-wrap w-full">
              <div className="flex flex-col flex-1 px-2">
                {/* eslint-disable-next-line */}
                <img loading="lazy" src="/images/icons/boxtick.svg" className="self-center w-6 aspect-square" />
                <div className="mt-2">GIAO HÀNG MIỄN PHÍ</div>
              </div>
              <div className="flex flex-col flex-1 pb-4">
                {/* eslint-disable-next-line */}
                <img loading="lazy" src="/images/icons/security_card.svg" className="self-center w-6 aspect-square" />
                <div className="mt-2">THANH TOÁN AN TOÀN</div>
              </div>
              <div className="flex flex-col flex-1 leading-4">
                {/* eslint-disable-next-line */}
                <img loading="lazy" src="/images/icons/transfer.svg" className="self-center w-6 aspect-square" />
                <div className="mt-2">1 ĐỔI 1 NGAY KHI CÓ VẤN ĐỀ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className="w-full">
          <h2 className="text-title lg:text-[18px] text-[16px] uppercase font-[600]">{storeProduct.product?.name_display || storeProduct.product?.short_name || storeProduct.product?.name}</h2>
          {/*<ProductRatingStar avgStar={0}*/}
          {/*                   size={15}*/}
          {/*                   className="pt-[10px]"*/}
          {/*                   numberClassName="text-[12px]"*/}
          {/*                   totalReview={0}*/}
          {/*                   totalSale={storeProduct.product.total_sales || 0}*/}
          {/*/>*/}
          {!storeProduct.promotions?.flash_sale?.id && (
            <>
              <div className="flex items-center lg:mt-[20px] mt-[14px]">
                <div className="flex items-baseline">
                  {storeProduct.product?.percent_promotion_display && storeProduct.product?.price_display && storeProduct.product.percent_promotion_display > 0 && (
                    <p className="lg:text-[18px] text-[16px] leading-[1] text-black mt-0 pr-[9px] lg:pr-[4px] line-through">{formatCurrency(storeProduct.product.price_display)}</p>
                  )}
                  <p className="font-[700] lg:text-[25px] text-[23px] leading-[1] text-price-active mt-0">
                    {storeProduct.product.percent_promotion_display && storeProduct.product.percent_promotion_display > 0
                      ? storeProduct.product.price_promotion_display
                      : formatCurrency(storeProduct.product.price_display || 0)}
                  </p>
                </div>
                {(storeProduct.product?.percent_promotion_display || 0) > 0 && (
                  <p className="text-[13px] leading-[1] text-price-active border-price-active py-[3px] px-[6px] w-fit bg-white ml-[7px] mt-0 rounded-[2px]">
                    {storeProduct.product.percent_promotion_display}%
                  </p>
                )}
              </div>
              {renderOtherPromotions()}
            </>
          )}
        </div>
        {storeProduct.promotions.flash_sale &&
          (storeProduct.promotions.flash_sale.status === FLASH_SALE_STATUS.HAPPENING || storeProduct.promotions.flash_sale.status === FLASH_SALE_STATUS.UPCOMING) && (
            <div className="mt-[13px] lg:mt-[16px]">
              <div className="relative w-full py-[9px] lg:pl-[6px] lg:pr-[11px] bg-[#f54550] lg:block flex justify-between px-[6px]">
                <div className="flex items-center">
                  <span className="text-[14px] lg:text-[16px] uppercase leading-[2] text-white">{t.shockingPrice}</span>
                  {/* eslint-disable-next-line */}
                  <img className="lg:w-[26px] lg:h-[26px] object-contain w-[23px] h-[23px]" src="/images/img-sale-white.png" alt="flashSale icon" />
                  <span className="text-[14px] lg:text-[16px] uppercase leading-[2] text-white">{t.today}</span>
                </div>
                <CountDownFlashSale flashSale={storeProduct.promotions.flash_sale} className="absolute items-center top-1/2 right-[11px] -translate-y-1/2 text-white text-[11px]" />
              </div>
              <div className="lg:px-[16px] pb-[14px] px-[10px] bg-[#F5F5F5] flex justify-between">
                <div className="flex items-center lg:mt-[20px] mt-[14px]">
                  <div className="flex items-baseline">
                    {flashSalePromotionPrice > 0 && (
                      <p className="lg:text-[18px] text-[16px] leading-[1] text-black mt-0 pr-[9px] lg:pr-[4px] line-through">{formatCurrency(storeProduct.product.price_display || 0)}</p>
                    )}
                    <p className="font-[700] lg:text-[25px] text-[23px] leading-[1] text-price-active mt-0">
                      {Math.round((flashSalePromotionPrice / (storeProduct.product.price_display || 0)) * 100) >= (storeProduct.product.percent_promotion_display || 0)
                        ? formatCurrency((storeProduct.product.price_display || 0) - flashSalePromotionPrice)
                        : storeProduct.product.price_promotion_display}
                    </p>
                  </div>
                  {flashSalePromotionPrice > 0 && (
                    <p className="text-[13px] leading-[1] text-price-active border-price-active py-[3px] px-[6px] w-fit bg-white ml-[7px] mt-0 rounded-[2px]">
                      {Math.round((flashSalePromotionPrice / (storeProduct.product.price_display || 0)) * 100)}%
                    </p>
                  )}
                </div>
                {storeProduct.promotions.flash_sale.status !== FLASH_SALE_STATUS.HAPPENING && renderOtherPromotions()}
              </div>
            </div>
          )}
      </>
    )
  }
}

export default TopInfoSection
