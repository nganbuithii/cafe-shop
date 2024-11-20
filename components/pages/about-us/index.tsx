import BannerTop from "components/common/banners/banner-top"
import Heading from "components/common/heading"
import { useLanguage } from "hooks/useLanguage"
import Image from "next/image"
import { useMeasurements } from "hooks/useMeasurements"
import Breadcrumb from "components/common/breadcrumb"
const About = () => {
  const { isMobile } = useMeasurements()
  const { t } = useLanguage()
  return (
    <>
      <BannerTop isMobile={isMobile} />
      <div className="container">
        <Breadcrumb breadcrumb={[{ title: t.aboutUs, href: "/about-us" }]} />
        <Heading title={t.aboutUs} description="Ghé shop để xem sản phẩm tuyệt vời" className="md:mt-[40px] mt-[0px]" />
      </div>
      <div className="waves-wrapper relative mt-[30px]">
        <div className="container z-10 relative">
          <div className="aspect-video w-full bg-gray-100 relative h-full">
            <Image layout="fill" objectFit="cover" priority={true} src={isMobile ? "/images/about-mobile-1.png" : "/images/about-image-1.png"} alt={"about"} />
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
        <div className="flex flex-row justify-between gap-5 -mt-[20px] md:-mt-[10px] mb-[10px] md:mb-[20px]">
          <div className="relative aspect-square bg-gray-100 w-full">
            <Image layout="fill" objectFit="contain" priority={true} src={"/images/about-image-2.png"} alt={"about"} />
          </div>
          <div className="aspect-video w-full bg-gray-100 relative">
            <Image layout="fill" objectFit="contain" priority={true} src={"/images/about-image-3.png"} alt={"about"} />
          </div>
        </div>
        <div className="aspect-video w-full bg-gray-100 relative">
          <Image layout="fill" objectFit="cover" priority={true} src={"/images/about-image-4.png"} alt={"about"} />
        </div>
      </div>
    </>
  )
}
export default About
