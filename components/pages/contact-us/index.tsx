import BannerTop from "components/common/banners/banner-top"
import Heading from "components/common/heading"
import { useLanguage } from "hooks/useLanguage"
import Image from "next/image"
import { useMeasurements } from "hooks/useMeasurements"
import Breadcrumb from "components/common/breadcrumb"
import { FaChevronRight } from "react-icons/fa"

const Contact = () => {
  const { isMobile } = useMeasurements()
  const { t } = useLanguage()
  return (
    <>
      <BannerTop isMobile={isMobile} />
      <div className="container">
        <Breadcrumb breadcrumb={[{ title: t.Contact, href: "/contact-us" }]} />
        <Heading title={t.Contact} description="Ghé shop để xem sản phẩm tuyệt vời" className="md:mt-[40px] mt-[0px]" />
      </div>
      <div className="waves-wrapper max-md:pb-0 relative mt-[30px]">
        <div className="container relative z-10 max-sm:pb-[30px]">
          <div className="aspect-[2.63] w-full bg-gray-100 relative h-full">
            <Image alt="media" className="w-full " layout="fill" objectFit="cover" objectPosition="center" priority={true} src={"/images/contact_us.png"} />
          </div>
        </div>
        <div className="absolute max-md:block hidden w-full z-9">
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
          <div className="gradient-bottom" />
        </div>
      </div>
      <div className="container">
        <div className="md:mt-[30px]">
          <div className="flex gap-[30px] max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-bold text-slate-950 max-sm:mt-[0] mt-[20px] max-md:max-w-full">
                <div className="md:text-[40px] text-[20px] tracking-normal leading-10 text-slate-950 max-md:max-w-full">Hãy liên lạc với chúng tôi và gửi tin nhắn cho chúng tôi ngay hôm nay!</div>
                <div className="mt-[30px] max-md:text-[16px] tracking-normal font-normal leading-7 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </div>
                <div className="mt-[30px] tracking-normal leading-6 text-slate-950 max-md:text-[16px] max-md:max-w-full">Địa chỉ : 42 Đường số 2, Khu Cityland, Phường 7, Quận Gò vấp, TPHCM</div>
                <div className="self-start mt-5 text-xl leading-8">
                  <span className="font-semibold text-slate-950 max-md:text-[16px]">Email:</span> <span className=" text-slate-950 font-normal">wowivietnam.com.vn</span>
                </div>
                <div className="self-start mt-2.5 text-xl leading-8">
                  <span className="font-semibold text-slate-950 max-md:text-[16px]">Phone:</span> <span className=" text-slate-950 font-normal">+84 (0) 101 0000 000</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-6/12">
              <div className="flex flex-col flex-wrap content-start self-stretch px-7 py-8 my-auto w-full text-lg tracking-normal leading-7 bg-white rounded-lg shadow-xl text-slate-950 max-md:px-5 max-md:mt-[30px]">
                <div className="flex gap-5 max-md:gap-10 justify-between max-md:flex-wrap w-full">
                  <div className="flex flex-col justify-center max-md:w-full">
                    <div className="justify-center items-start py-3.5 px-3 bg-white rounded-lg border border-solid border-[#dad9df] max-md:pr-5">
                      <input type="text" placeholder="Tên" className="outline-none w-full text-[18px]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center max-md:w-full">
                    <div className="justify-center items-start py-3.5 px-3 bg-white rounded-lg border border-solid border-[#dad9df] max-md:pr-5">
                      <input type="text" placeholder="Email" className="outline-none w-full text-[18px]" />
                    </div>
                  </div>
                </div>
                <div className="justify-center items-start p-3 mt-10 whitespace-nowrap bg-white rounded-lg border border-solid border-[#dad9df] max-md:pr-5 max-md:max-w-full">
                  <textarea placeholder="Nội dung" className="outline-none w-full h-full text-[18px]" rows={3} />
                </div>
                <div className="flex flex-col justify-center mt-10 w-40 max-w-full text-sm tracking-normal leading-5 text-center text-white bg-[#0f75bc] rounded-[100px]">
                  <div className="flex gap-2 justify-between px-9 py-2.5 max-md:px-5 cursor-pointer">
                    <div className="text-[14px]">Gửi Liên Hệ</div>
                    <FaChevronRight className="my-auto aspect-[0.58] fill-white w-[7px]" color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
