import React, { memo } from "react"

const PromotionBanner = () => {
  return (
    <div className="flex flex-col justify-center md:pb-0 pb-[20px] bg-neutral-50">
      {/* eslint-disable-next-line */}
      <img alt="media" loading="lazy" srcSet="/images/promotion_banner.png" className="w-full aspect-[2.94] max-md:max-w-full" />
    </div>
  )
}

export default memo(PromotionBanner)
