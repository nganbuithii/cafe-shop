import React, { Dispatch, SetStateAction } from "react"
import { Modal } from "antd"
import Link from "next/link"

// Define the prop types
interface MyComponentProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalOrderSuccess: React.FC<MyComponentProps> = ({ open, setOpen }) => {
  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ hidden: true }} cancelButtonProps={{ hidden: true }}>
      <div className="flex flex-col items-center text-lg text-center bg-white rounded-2xl max-w-[469px]">
        <div className="flex overflow-hidden relative flex-col items-center self-stretch pb-12 text-xl ">
          {/* eslint-disable-next-line */}
          <img alt="media" loading="lazy" srcSet="/images/logo_opacity.svg" className="object-cover absolute inset-0 size-full" />
          {/* eslint-disable-next-line */}
          <img alt="media" loading="lazy" src="/images/icons/ic-check-circle.svg" className="aspect-square w-[60px]" />
          <div className="relative mt-2 font-semibold whitespace-nowrap leading-[160%] text-slate-950">Đặt Hàng Thành công !</div>
          <div className="relative self-stretch mt-5 leading-8 ">
            Đơn hàng <span className="font-bold">#42454545</span> của bạn đang được xử lý. Bạn có thể theo dõi đơn hàng trong mục
          </div>
          <div className="text-sky-600">Theo dõi đơn hàng</div>
        </div>
        <Link href={`/`}>
          <a className="justify-center items-center px-16 py-1.5 mt-3.5 w-full max-w-xs tracking-normal whitespace-nowrap bg-sky-600 rounded leading-[156%] text-neutral-50">Về Trang Chủ</a>
        </Link>
        <Link href={`/product`}>
          <a className="justify-center items-center px-16 py-1.5 mt-2.5 w-full max-w-xs tracking-normal text-sky-600 whitespace-nowrap rounded border border-solid border-[color:var(--Light-Primary-Blue-50,#0F75BC)] leading-[156%]">
            Tiếp Tục Mua Hàng
          </a>
        </Link>
      </div>
    </Modal>
  )
}

export default ModalOrderSuccess
