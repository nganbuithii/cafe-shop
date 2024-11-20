import React, { memo } from "react"
// import VariantMedia from "./variant-media"
import VariantInfo from "./variant-info"

const ProductInfo = () => {
  return (
    <div className="lg:pt-[36px] pt-[15px]" id="productInfoContainer">
      {/* <VariantMedia /> */}
      <VariantInfo />
    </div>
  )
}

export default memo(ProductInfo)
