import { useMeasurements } from "hooks/useMeasurements"
import BannerTop from "components/common/banners/banner-top"
import { useLanguage } from "hooks/useLanguage"
import Breadcrumb from "components/common/breadcrumb"
import Heading from "components/common/heading"
import Image from "next/image"
import FeaturedProducts from "components/common/featuredProducts"
const data = [
  {
    title: "NGUỒN CUNG CẤP NGUYÊN LIỆU",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "28/09/2022",
    img: "/images/blog-imgs/blog-image-1.png"
  },
  {
    title: "BỘT CACAO WOWI",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "28/09/2022",
    img: "/images/blog-imgs/blog-image-2.png"
  },
  {
    title: "NGUỒN CUNG CẤP NGUYÊN LIỆU",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "28/09/2022",
    img: "/images/blog-imgs/blog-image-1.png"
  },
  {
    title: "BỘT CACAO WOWI",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "28/09/2022",
    img: "/images/blog-imgs/blog-image-2.png"
  }
]
const BlogList = () => {
  const { isMobile, isMedium } = useMeasurements()
  const { t } = useLanguage()
  const handleBlogPosition = (index: number) => {
    if (index % 2 !== 0) {
      return "col-start-4"
    } else return ""
  }
  const handlePicturePosition = (index: number) => {
    if (index % 2 !== 0) {
      return "col-start-1"
    } else return "col-start-2"
  }
  return (
    <div className="relative">
      <BannerTop isMobile={isMobile} />
      <div className="container">
        <div className="md:mb-0 mb-[20px]">
          <Breadcrumb breadcrumb={[{ title: t.blog, href: "/blog" }]} />
        </div>
        <Heading title={t.blog} description="Ghé shop để xem sản phẩm tuyệt vời" className="md:mt-[40px] mt-[0px]" />
        {isMobile
          ? data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mt-[30px] shadow-[0_2px_20px_0_#00000040] p-[20px] w-full h-[520px] rounded-[16px] 
                                flex flex-col gap-[20px]"
                >
                  <div className="text-[20px] text-center leading-[30px] line-clamp-1">{item?.title}</div>
                  <div className="text-[14px] line-clamp-5 text-opacity-70 text-black">{item?.content}</div>
                  <div className="flex gap-[10px] items-center">
                    <Image width={24} height={24} src={"/images/icons/ic-calendar.svg"} alt="icon" />
                    <div className="text-[12px] text-opacity-70 text-black">{item?.date}</div>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className="flex justify-center items-center px-10 py-3 text-sm tracking-normal 
                                        leading-5 text-white whitespace-nowrap bg-[#0F75BC] rounded-[100px] cursor-pointer
                                        text-[14px]"
                    >
                      {t.exploreNow}
                      <div className="ml-2 items-center flex">
                        <Image width={12} height={12} src="/images/arrow_forward_white.svg" alt="icon" />
                      </div>
                    </div>
                  </div>
                  <Image width={12} height={200} objectFit="cover" src={item?.img} alt="icon" />
                </div>
              )
            })
          : data.map((item, index) => {
              return (
                <div key={index} className="w-full mt-[30px] mb-[80px] lg:mb-[120px] relative grid grid-cols-5">
                  <div className="grid grid-cols-5 absolute top-[40%] h-3/4 w-full">
                    <div
                      className={`${handleBlogPosition(index)} aspect-[2] flex flex-col gap-[15px] lg:gap-[20px] col-span-2 w-full
                                                rounded-[16px] z-10 bg-[#ffff] p-[15px] lg:p-[20px_30px_20px_30px] shadow-[0_2px_20px_0_#00000040]`}
                    >
                      <div className="text-[18px] text-center leading-[20px] lg:leading-[30px] lg:text-[24px] line-clamp-1">{item?.title}</div>
                      <div className="text-[12px] lg:text-[16px] line-clamp-3 text-opacity-70 text-black">{item?.content}</div>
                      <div className="flex gap-[10px] items-center">
                        <Image width={isMedium ? 14 : 24} height={isMedium ? 14 : 24} src={"/images/icons/ic-calendar.svg"} alt="icon" />
                        <div className="text-[12px] lg:text-[16px] text-opacity-70 text-black">{item?.date}</div>
                      </div>
                      <div className="flex justify-center">
                        <div
                          className="flex justify-center items-center px-10 py-[15px] mt-2 text-sm tracking-normal 
                                                        leading-5 text-white bg-[#0F75BC] rounded-[100px] max-lg:px-3 max-lg:py-2 cursor-pointer
                                                             lg:text-[18px] text-[14px]"
                        >
                          {t.exploreNow}
                          <div className="ml-2 items-center flex">
                            <Image width={isMedium ? 14 : 18} height={isMedium ? 14 : 18} src="/images/arrow_forward_white.svg" alt="icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${handlePicturePosition(index)} col-span-4`}>
                    <div className="h-full md:p-[20px_20px_10px_20px] rounded-[16px] h-[fit-content] w-[fit-content] p-[10px_10px_5px_10px] shadow-[0_2px_20px_0_#00000040]">
                      <Image width={1940} height={690} src={item?.img} objectFit="cover" alt="blog" />
                    </div>
                  </div>
                </div>
              )
            })}
      </div>
      <FeaturedProducts />
    </div>
  )
}
export default BlogList
