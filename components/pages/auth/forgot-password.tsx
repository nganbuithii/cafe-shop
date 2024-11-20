import InputBorder from "components/common/input-border"
import React, { useState } from "react"
import { useLanguage } from "hooks/useLanguage"
import Loading from "components/common/loading-background"
import Image from "next/image"
import { useMeasurements } from "hooks/useMeasurements"
const ForgotPassword = () => {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false)
  const { isMedium } = useMeasurements()
  const [checkDisabled, setCheckDisabled] = React.useState<boolean>(false)
  return (
    <React.Fragment>
      {loading && <Loading />}
      <div className="w-full bg-[var(--color-primary)]">
        <div className="container h-full flex flex-row gap-[30px] justify-center lg:items-center p-[25px] relative md:w-full max-h-full overflow-y-auto">
          <div className="w-full mb-[40px] grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="h-full text-center">
              <Image width={isMedium ? 300 : 610} height={isMedium ? 250 : 520} src="/images/wowi_logo_white.svg" alt="/images/login-background.png" className="w-full h-full" />
            </div>
            <div className="flex justify-center">
              <div className="items-center flex-col h-full w-full md:w-[450px]">
                <p className="text-[30px] text-[white] sm:text-[40px] pt-[20px] text-black-300 text-center font-bold">{t.forgotPassword}</p>
                <form className="mt-[30px] md:mt-[10px] font-['Roboto']">
                  <div className="bg-[white] relative p-[20px] border-[1px] border-[#E5E5E5] rounded-[8px]">
                    <div className="top-1/2 absolute flex justify-center left-1/2 w-full -translate-x-1/2 -translate-y-3/4">
                      <Image alt="media" width={360} height={260} src="/images/wowi_logo_blur.svg" />
                    </div>
                    <div className="flex flex-col gap-[8px] text-[14px] sm:text-[18px]">
                      <p className="text-[#050226] leading-[28px]">{t.yourEmail}</p>
                      <InputBorder name="email" type="text" placeholder={t.inputEmail} />
                    </div>
                    <div className="mt-[25px] text-[14px] sm:text-[18px] ">
                      <p className="text-[#050226] leading-[28px]">{t.newPassword}</p>
                      <InputBorder name="newPassword" type="password" placeholder={t.inputPassword} />
                    </div>
                    <div className="mt-[25px] text-[14px] sm:text-[18px] ">
                      <p className="text-[#050226] leading-[28px]">{t.confirmPassword}</p>
                      <InputBorder name="confirmPassword" type="password" placeholder={t.inputPassword} />
                    </div>
                    <div className="mt-[25px] text-[14px] sm:text-[18px] ">
                      <p className="text-[#050226] leading-[28px]">{t.enterCode}</p>
                      <InputBorder name="code" type="text" placeholder={`6 ${t.digits}`} />
                    </div>
                    <div className="px-[20px]">
                      <input
                        type="submit"
                        disabled={checkDisabled}
                        className="text-[14px] sm:text-[18px] mb-[10px] bg-[var(--color-primary)] shadow-lg text-white w-full py-[10px] mt-[18px] rounded-[4px] cursor-pointer"
                        value={t.confirm}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ForgotPassword