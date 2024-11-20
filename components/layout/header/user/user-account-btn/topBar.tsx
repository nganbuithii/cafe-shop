import Link from "next/link"

const UserAccountBtn = () => {
  return (
    <div className="relative z-[100]">
      <Link href={"/"}>
        <a className="flex items-center text-[15px] lg:text-[16px] cursor-pointer text-white">customer_email</a>
      </Link>
    </div>
  )
}

export default UserAccountBtn
