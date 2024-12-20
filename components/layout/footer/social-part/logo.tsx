import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <Link href="/" className="flex-shrink-0">
      <a className="block md:flex items-center justify-start mb-[25px]">
        <Image src="/images/logo-color.svg" alt="zili-logo" width={115} height={70} objectFit="contain" className="cursor-pointer md:ltr:-mr-3 flex-shrink-0" />
      </a>
    </Link>
  )
}

export default Logo
