import React from "react"
import UserAccountBtn from "components/layout/header/user/user-account-btn/topBar"
import LoginBtn from "./login-btn-topbar"
import { getFromLocalStorage } from "helpers/base.helper"
import { useAuth } from "stores/auth"

const User = () => {
  const isLogin = getFromLocalStorage("isLogin")
  const userData = getFromLocalStorage("userData")
  const [, actionAuth] = useAuth()

  React.useEffect(() => {
    userData?.id && actionAuth.setUser({ userData, isLogin: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{isLogin && userData?.id ? <UserAccountBtn /> : <LoginBtn />}</div>
}

export default User
