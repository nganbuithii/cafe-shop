import React from "react"
import { useLanguage } from "hooks/useLanguage"
import Logo from "./logo"

const SocialPart = () => {
  const { t } = useLanguage()

  return (
    <div className="lg:mr-48 lg:mb-10 lg:max-w-[330px] w-full">
      <div>
        <Logo />
        <div className="flex mt-3 text-[14px] lg:text-[16px] text-justify text-[#5c5a72]">{t.footerDescription}</div>
      </div>
    </div>
  )
}

export default SocialPart
