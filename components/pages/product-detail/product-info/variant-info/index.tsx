import React, { memo } from "react"
import TopInfoSection from "./top-info-section"
import OptionSection from "./option-section"

const VariantInfo = () => {
  return (
    <>
      <div className="mb-[25px]">
        <TopInfoSection />
        <OptionSection />
      </div>
    </>
  )
}

export default memo(VariantInfo)
