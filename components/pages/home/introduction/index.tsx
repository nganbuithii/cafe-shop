import React, { memo, useEffect, useState } from "react"
import { useLanguage } from "hooks/useLanguage"
import useDeviceDetect from "hooks/useDeviceDetect"
import { usePageComponent } from "stores/page-component"
import { replaceUrlImage } from "helpers/base.helper"
import Heading from "components/common/heading"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"

import "swiper/swiper-bundle.css"

const LIMIT = 3
const LIMIT_ON_PHONE = 2

const Introduction = () => {
  const { t } = useLanguage()
  const currentDevice = useDeviceDetect()
  const [pageComponent] = usePageComponent()
  const [isMobile, setIsMobile] = useState(false)
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

  useEffect(() => {
    setIsMobile(currentDevice.isMobile())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // if (!pageComponent.pageComponent.itemHomeIntroduce) return <></>

  return (
    <div className="waves-wrapper overflow-hidden">
      <div className="container">
        <div className="w-full h-auto mt-[27px] py-2.5 justify-center items-center gap-[10px] md:gap-[10px] lg:gap-[30px] xl:gap-[70px] md:inline-flex grid grid-cols-2">
          <div className="md:max-w-[200px] max-w-full w-full justify-start items-center gap-[30px] flex">
            <div className="h-[92px] w-full flex-col justify-start items-center gap-2 inline-flex">
              {/* eslint-disable-next-line */}
              <img src="/images/icons/introduce/ic-truckfast.svg" alt="/images/icons/cart-icon.svg" className="w-8px h-8px" />
              <div className="min-h-[52px] flex-col justify-start items-center gap-1 flex">
                <div className="text-center text-sky-600 lg:text-lg md:text-xs text-[12px]  font-normal font-['Roboto'] tracking-tight">Miễn phí vận chuyển</div>
                <div className="pb-1 justify-center items-center inline-flex break-words">
                  <div className="text-center text-black text-opacity-60 lg:text-[12px] text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">Đơn hàng tối thiểu: 500k</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[2px] h-[52px] md:block hidden relative bg-black" />
          <div className="md:max-w-[200px] max-w-full w-full justify-start items-center gap-[30px] flex">
            <div className="xs:h-[92px] h-auto w-full flex-col justify-start items-center gap-2 inline-flex">
              {/* eslint-disable-next-line */}
              <img src="/images/icons/introduce/ic-delivery.svg" alt="/images/icons/cart-icon.svg" className="w-8px h-8px" />
              <div className="xs:min-h-[52px] min-h-auto flex-col justify-start items-center gap-1 flex">
                <div className="text-center text-sky-600 lg:text-lg xs:text-xs text-[12px]  font-normal font-['Roboto'] tracking-tight">7 Ngày đổi trả</div>
                <div className="pb-1 justify-center items-center inline-flex break-words">
                  <div className="text-center text-black text-opacity-60 lg:text-[12px] text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">{""}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[2px] h-[52px] md:block hidden relative bg-black" />
          <div className="md:max-w-[200px] max-w-full w-full justify-start items-center gap-[30px] flex">
            <div className="h-[92px] w-full flex-col justify-start items-center gap-2 inline-flex">
              <div className="w-8 h-8 justify-start items-start gap-2.5 inline-flex">
                {/* eslint-disable-next-line */}
                <img src="/images/icons/introduce/ic-securitycard.svg" alt="/images/icons/cart-icon.svg" className="w-8px h-8px" />
              </div>
              <div className="min-h-[52px] flex-col justify-start items-center gap-1 flex">
                <div className="text-center text-sky-600 lg:text-lg md:text-xs text-[12px]  font-normal font-['Roboto'] tracking-tight">Thanh toán an toàn</div>
                <div className="pb-1 justify-center items-center inline-flex break-words">
                  <div className="text-center text-black text-opacity-60 lg:text-[12px] text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">100% an toàn thanh toán</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[2px] h-[52px] md:block hidden relative bg-black" />
          <div className="md:max-w-[200px] max-w-full w-full justify-start items-center gap-[30px] flex">
            <div className="h-[92px] w-full flex-col justify-start items-center gap-2 inline-flex">
              {/* eslint-disable-next-line */}
              <img src="/images/icons/introduce/ic-question.svg" alt="/images/icons/cart-icon.svg" className="w-8px h-8px" />
              <div className="min-h-[52px] flex-col justify-start items-center gap-1 flex">
                <div className="text-center text-sky-600 lg:text-lg md:text-xs text-[12px]  font-normal font-['Roboto'] tracking-tight">Hỗ trợ 24/7</div>
                <div className="pb-1 justify-center items-center inline-flex break-words">
                  <div className="text-center text-black text-opacity-60 lg:text-[12px] text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">Hỗ trợ kịp thời tới quý khách</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Heading title="Mua Sắm Theo Danh Mục" description="Ghé shop để xem sản phẩm tuyệt vời" className="md:mt-[59px] mt-[0px]" />
          <div className="container container-full-phone">
            {products && products.length > 0 && (
              <Swiper
                className="mt-[30px] product-swiper"
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={30}
                navigation
                keyboard={{
                  enabled: true
                }}
                autoplay={{
                  delay: 3000
                }}
                speed={800}
                loop={true}
                breakpoints={{
                  770: {
                    slidesPerView: LIMIT,
                    spaceBetween: 30,
                    centeredSlides: false
                  },
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  }
                }}
                modules={[Navigation, Autoplay]}
              >
                {products?.map((item: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className="bg-transparent">
                      <div className="flex flex-col w-full">
                        <div className="flex gap-5 justify-between items-start py-[35px] px-2.5 rounded border border-solid bg-stone-100 hover:border-[color:var(--Light-Primary-Blue-5,#0F75BC)] cursor-pointer relative">
                          <div className="w-full h-full flex items-center justify-center">
                            {/* eslint-disable-next-line */}
                            <img loading="lazy" srcSet={item?.image} className="self-end mt-6 max-w-full aspect-[0.64] w-[166px]" />
                          </div>
                          {/* eslint-disable-next-line */}
                          <img loading="lazy" srcSet="/images/logo_w.png" className="self-start aspect-[2.5] w-[84px] absolute right-0 top-[10px]" />
                        </div>
                        <div className="self-center mt-2.5 text-xl font-bold leading-8 text-sky-600 whitespace-nowrap">{item?.name}</div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            )}
          </div>
        </div>
      </div>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(15, 117, 188, 1), rgba(114, 215, 251, 1), rgba(207, 218, 212, 1), rgba(197, 240, 255, 1)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(15, 117, 188, 1), rgba(163, 228, 251, 1), rgba(208, 243, 255, 1)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(15, 117, 188, 1), rgba(79, 207, 252, 1), rgba(210, 239, 249, 1)" />
        </g>
      </svg>
      <div className="gradient-bottom" style={{ width: "101%", height: "101px", transform: "translateY(1px)" }} />
    </div>
  )
}

export default memo(Introduction)
