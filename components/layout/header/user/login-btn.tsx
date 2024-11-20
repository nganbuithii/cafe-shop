import React from "react"
import { FaRegUserCircle } from "react-icons/fa"
import { useRouter } from "next/router"

const LoginBtn = () => {
  const router = useRouter()

  return (
    <a aria-label="User actions" onClick={() => router.push("/login")} className="cursor-pointer">
      <div className="items-center rounded-lg">
        <div>
          <FaRegUserCircle color="white" size={24} />
        </div>
      </div>
    </a>
  )
}

export default LoginBtn
