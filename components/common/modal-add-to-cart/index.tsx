import React, { useState } from "react"
import { Button, Modal } from "antd"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Mousewheel, Swiper as SwiperOther } from "swiper"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"
import RatingStar from "components/common/product-star"
import AddToCartSection from "components/pages/product-detail/product-info/variant-info/add-to-cart-section"

const ModalAddToCart = ({ open, setOpen }: any) => {
  const [imagesNavSlider, setImagesNavSlider] = useState<SwiperOther | null>(null)

  const slides = [
    "/images/product-img/mockup/thumb_1.png",
    "/images/product-img/mockup/thumb_1.png",
    "/images/product-img/mockup/thumb_1.png",
    "/images/product-img/mockup/thumb_2.png",
    "/images/product-img/mockup/thumb_3.png",
    "/images/product-img/mockup/thumb_4.png"
  ]

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} onOk={handleOk} onCancel={handleCancel} width={1280} okButtonProps={{ hidden: true }} cancelButtonProps={{ hidden: true }}>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="w-[59%] max-lg:w-1/2 max-md:ml-0 max-md:w-full h-full">
          <div className="swiper-container-wrapper h-[600px] max-md:h-[410px] max-xs:h-[380px]">
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
                      <img src={slide} alt="media" />
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
                thumbs={{ swiper: imagesNavSlider && !imagesNavSlider?.destroyed ? imagesNavSlider : null }}
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
                      <img src={slide} alt="media" className="object-contain w-full h-full" />
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
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalAddToCart
