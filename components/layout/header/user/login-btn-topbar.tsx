import React from "react"
import { useLanguage } from "hooks/useLanguage"
import { useAuth } from "stores/auth"
import { FaRegUserCircle } from "react-icons/fa"
import { useRouter } from "next/router"
const LoginBtn = () => {
  const { t } = useLanguage()
  const [, actionAuth] = useAuth()
  const router = useRouter()
  return (
    <a aria-label="User actions">
      <div className="items-center rounded-lg">
        <div className="md:hidden">
          <FaRegUserCircle style={{ color: "white", transform: "translate(2px,-1px)" }} size={25} />
        </div>
        <div className="hidden md:flex text-[15px] lg:text-[16px] text-white flex-row gap-1">
          <div className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => router.push("/login")}>
            {t.signIn}
          </div>
          <div>|</div>
          <div className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => router.push("/register")}>
            {t.signUp}
          </div>
        </div>
      </div>
    </a>
  )
}

export default LoginBtn
