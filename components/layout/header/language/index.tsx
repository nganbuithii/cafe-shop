import React, { useEffect, useState } from "react"
import { MdLanguage } from "react-icons/md"
import { VscTriangleDown } from "react-icons/vsc"
import { useLanguage } from "hooks/useLanguage"
import LanguageItem from "./language-item"
import { useSettingBox } from "stores/setting-box"

const Language = () => {
  const { t, locale } = useLanguage()
  const [, actionSettingBox] = useSettingBox()
  const [openLang, setOpenLang] = useState(false)

  useEffect(() => {
    document.documentElement.dir = "ltr"
  }, [locale])

  function onCloseLangBox() {
    setOpenLang(false)
  }

  async function handleCloseSettingBox() {
    await actionSettingBox.toggleSettingBox(false)
  }

  return (
    <div className="relative">
      {/* <div className="md:hidden">
        <h3>{t.language}</h3>
        <div className={`ltr:ml-2 rtl:mr-2 mt-2 z-10`}>
          <LanguageItem language="en" onCloseBox={handleCloseSettingBox} />
          <LanguageItem language="vi" onCloseBox={handleCloseSettingBox} />
        </div>
      </div> */}

      <div className="flex items-center cursor-pointer" onClick={() => setOpenLang((prevState) => !prevState)}>
        <MdLanguage style={{ fontSize: "24px", color: "white" }} />
        <p className="mx-[0.3rem] text-[16px] font-normal font-english text-white uppercase">{locale === "en" ? "En" : "Vi"}</p>
        <VscTriangleDown style={{ fontSize: "1.1rem", color: "white" }} />
      </div>
      {openLang ? (
        <>
          <div className="fixed inset-0 -z-1" onClick={() => setOpenLang(false)}></div>
          <div className={`absolute top-6 ltr:right-0 rtl:left-0 bg-white py-3 px-6 shadow-md rounded-md`}>
            <LanguageItem language="vi" onCloseBox={onCloseLangBox} />
            <LanguageItem language="en" onCloseBox={onCloseLangBox} />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Language
