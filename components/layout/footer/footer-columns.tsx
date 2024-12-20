import Link from "next/link"
import React from "react"
import { useLanguage } from "hooks/useLanguage"
import { ADDRESS_LIST, FOOTER_COLUMNS } from "constants/footer.constant"
import { DEFAULT_EMAIL, DEFAULT_LANGUAGE, DEFAULT_PHONE_NUMBER } from "constants/base.constant"

const FooterColumns = () => {
  const { t, locale } = useLanguage()
  return (
    <div className="flex justify-between flex-wrap flex-grow min-width-[800px] xl:rtl:pl-60">
      {FOOTER_COLUMNS.map((item, index) => {
        return (
          <div className="mt-6 lg:mt-0" key={index}>
            <h2 className="text-[18px] border-b-2 font-semibold border-[#0F75BC] pb-4 inline-block max-w-max">{locale === DEFAULT_LANGUAGE ? item.titleEn : item.titleVi}</h2>
            <div className="flex flex-col mt-2">
              {item.subtitles?.map((subItem, subIndex) => {
                return (
                  <Link href={subItem.href} key={`${index}${subIndex}`}>
                    <a className=" text-[14px] py-2 hover:underline">{locale === DEFAULT_LANGUAGE ? subItem.textEn : subItem.textVi}</a>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
      <div className="mt-6 lg:mt-0 max-w-[350px] w-full">
        <h2 className="text-[18px] border-b-2  font-semibold border-[#0F75BC] pb-4 inline-block max-w-max">{t.contactInformation}</h2>
        <div className="flex flex-col mt-2">
          <a href={`mailto:${DEFAULT_EMAIL}`} className="text-[14px] text-justify  py-2 hover:underline">
            <span>Email:</span> {DEFAULT_EMAIL}
          </a>
          <a href={`tel:${DEFAULT_PHONE_NUMBER}`} className="text-[14px] text-justify  py-2 hover:underline">
            <span>{t.phoneNumber}:</span> {DEFAULT_PHONE_NUMBER}
          </a>
          {ADDRESS_LIST.length > 0 &&
            ADDRESS_LIST.map((address, index) => {
              return (
                <a className="text-[14px] text-justify  py-2" key={index}>
                  <span>
                    {t.address} {index + 1}:
                  </span>{" "}
                  {locale === DEFAULT_LANGUAGE ? address.titleEn : address.titleVi}
                </a>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default FooterColumns
