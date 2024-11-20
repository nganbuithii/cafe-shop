import React, { memo } from "react"
import Heading from "components/common/heading"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { HiOutlineChevronDoubleRight } from "react-icons/hi"
import styled from "styled-components"

const LIMIT = 3

import "swiper/swiper-bundle.css"

const HomeBlogs = () => {
  return (
    <div className="bg-neutral-50 md:py-[30px] py-[20px] md:border-none border-y border-[#e1e1e1]">
      <div className="container">
        <Heading title="Bài Viết" description="Ghé shop để xem sản phẩm tuyệt vời" />
        <div className="flex flex-col mt-[20px]">
          <div className="md:flex items-center hidden gap-2.5 self-end text-base tracking-wide text-sky-600 cursor-pointer mb-[14px]">
            <div>Xem tất cả</div>
            <HiOutlineChevronDoubleRight color={"#0F75BC"} size={20} />
          </div>
          <div className="w-full max-md:max-w-full relative">
            <button className="arrow-prev absolute xxl:left-[-70px] left-0 top-[50%] transform translate-y-[-50%] z-10" />
            <button className="arrow-next absolute xxl:right-[-70px] right-0 top-[50%] transform translate-y-[-50%] z-10" />
            <Swiper
              className="blog-swiper"
              slidesPerGroup={LIMIT}
              spaceBetween={30}
              navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
              keyboard={{
                enabled: true
              }}
              modules={[Navigation]}
              breakpoints={{
                770: {
                  slidesPerView: LIMIT,
                  spaceBetween: 30
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                }
              }}
            >
              {Array.from({ length: 4 }).map((item: any, index: number) => {
                return (
                  <SwiperSlide className="shadow-lg rounded-2xl overflow-hidden" key={index}>
                    <div className="flex flex-col pt-5 text-sm bg-white shadow-sm text-slate-950">
                      <div className="self-center text-xl leading-8 whitespace-nowrap text-slate-950 mt-[20px]">NGUỒN CUNG CẤP NGUYÊN LIỆU </div>
                      <div className="mt-5 w-full tracking-normal leading-5 px-[13px]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus.
                      </div>
                      <div className="flex gap-3 justify-between pr-5 mt-5 text-xs tracking-wide leading-4 whitespace-nowrap px-[13px]">
                        {/* eslint-disable-next-line */}
                        <img
                          alt="media"
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcd425bac673bdd928e2150464822c57138147e4fdca04e2bd559c6663893206?"
                          className="w-6 aspect-square"
                        />
                        <div className="flex-auto my-auto">28/09/2022</div>
                      </div>
                      <div className="mb-[20px] flex flex-col justify-center self-center mt-5 w-40 max-w-full tracking-normal text-center text-white whitespace-nowrap bg-sky-600 leading-[143%] rounded-[100px]">
                        <div className="flex gap-2 justify-between px-6 py-2.5">
                          <div className="grow">Khám phá ngay</div>
                          {/* eslint-disable-next-line */}
                          <img
                            alt="media"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/419131d8d8c7ee3e045dec2cea98954c93d86df3c1237ce7635dc7c79b33c3b2?"
                            className="my-auto aspect-[0.58] fill-white w-[7px]"
                          />
                        </div>
                      </div>
                      {/* eslint-disable-next-line */}
                      <img alt="media" loading="lazy" srcSet="/images/featured-imgs/featuredBannerOne.png" className="w-full aspect-[1.49]" />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="flex items-center md:hidden gap-2.5 mt-[0px] mx-auto self-end text-base tracking-wide text-sky-600 cursor-pointer">
            <div>Xem tất cả</div>
            <HiOutlineChevronDoubleRight color={"#0F75BC"} size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(HomeBlogs)
