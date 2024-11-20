import React, { memo } from "react"
import Heading from "components/common/heading"
import RatingStar from "components/common/product-star"
import { MdOutlineCheck } from "react-icons/md"

import "swiper/swiper-bundle.css"

const FeaturedProducts = () => {
  const products: any = [
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
      <div className="bg-neutral-50 py-[20px] md:border-none border-y border-[#e1e1e1]">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="w-full">
              <div className="flex gap-[20px] max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  {/* eslint-disable-next-line */}
                  <img alt="media" loading="lazy" srcSet="/images/featured-imgs/featuredBannerOne.png" className="grow w-full aspect-[1.47] max-md:max-w-full" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  {/* eslint-disable-next-line */}
                  <img alt="media" loading="lazy" srcSet="/images/featured-imgs/featuredBannerTwo.png" className="grow w-full aspect-[1.47] max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 pb-[30px]">
        <div className="container">
          <Heading title="Sản phẩm nổi bật" description="Ghé shop để xem sản phẩm tuyệt vời" className="md:pt-[40px] pt-[20px]" />
          <div className="mt-[36px]">
            {products && products.length > 0 && (
              <div className="flex gap-[30px] max-md:flex-col">
                {products?.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-center px-[14px] py-[20px] md:px-5 md:py-9 rounded-2xl border-4 border-solid border-[color:var(--Light-Primary-Blue-50,#0F75BC)] w-full relative"
                    >
                      {/* eslint-disable-next-line */}
                      <img
                        alt="media"
                        loading="lazy"
                        src="/images/featured-imgs/best_seller_tag.svg"
                        className="w-[135px] h-[118px] aspect-square absolute left-0 top-0 transform translate-x-[-25%] translate-y-[-25%]"
                      />
                      <div className="max-md:max-w-full">
                        <div className="flex gap-5">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            {/* eslint-disable-next-line */}
                            <img alt="media" loading="lazy" srcSet="images/featured-imgs/tea_mockup.png" className="self-stretch my-auto w-full aspect-[1.28]" />
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center md:mt-4">
                              <div className="flex gap-1 justify-between items-center">
                                <RatingStar totalStars={4.5} />
                                <div className="flex-auto text-xs tracking-widest leading-4 text-slate-950">(600)</div>
                              </div>
                              <div className="mt-2 text-xs tracking-wide leading-4 text-slate-950 opacity-50">Wowi Trà</div>
                              <div className="mt-3 text-lg font-bold tracking-normal leading-6 text-sky-600">Trà đen đặc biệt</div>
                              <div className="mt-3 text-[12px] tracking-wide leading-4 text-slate-950 line-clamp-4">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.{" "}
                              </div>
                              <div className="mt-3 text-xl font-medium leading-8 text-sky-600">220.000đ</div>
                              <div className="shrink-0 mt-2.5 h-px bg-black bg-opacity-10" />
                              <div className="flex gap-2 justify-between items-center mt-2.5 text-sm tracking-normal leading-5 text-slate-950">
                                <MdOutlineCheck className="my-auto w-4 aspect-square" size={24} color={"#00D916"} />
                                <div className="flex-auto ">Còn hàng</div>
                              </div>
                              <div className="justify-center items-center px-16 py-2.5 mt-2 text-sm tracking-normal leading-5 text-center text-white whitespace-nowrap bg-sky-600 rounded-[100px] max-md:px-5 cursor-pointer">
                                Mua Ngay
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(FeaturedProducts)
