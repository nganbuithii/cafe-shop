import { useEffect, useState } from "react"
import Breadcrumb from "components/common/breadcrumb"
import { useLanguage } from "hooks/useLanguage"
import { IoLocationOutline } from "react-icons/io5"
import { MdEdit } from "react-icons/md"
import FeaturedProducts from "components/common/featuredProducts"
import { FaLongArrowAltLeft } from "react-icons/fa"
import ModalOrderSuccess from "components/common/modal-order-success"

const ShoppingCart = () => {
  const [open, setOpen] = useState<any>(false)
  const { t } = useLanguage()
  useEffect(() => {
    document.body.style.background = "#fafafa"
  }, [])

  return (
    <>
      <div className="container">
        <Breadcrumb
          breadcrumb={[
            { title: t["Shopping cart"], href: "/shopping-cart" },
            { title: t["Payment"], href: "/payment" }
          ]}
        />
        <div className="flex flex-col p-2.5 text-center bg-white rounded-lg">
          <div className="flex gap-5 justify-between px-0.5 w-full text-base tracking-wide max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-3 justify-between font-bold text-black whitespace-nowrap">
              <IoLocationOutline size={24} className="w-6 aspect-square" />
              <div className="grow my-auto">Địa chỉ nhận hàng</div>
            </div>
            <div className="flex gap-2.5 justify-between py-0.5 text-sky-600 cursor-pointer">
              <div>Thay đổi</div>
              <MdEdit size={24} className="my-auto w-4 aspect-square" />
            </div>
          </div>
          <div className="flex gap-5 self-start items-center mt-5 max-md:items-start max-md:flex-wrap max-md:max-w-full">
            <div className="flex-1 justify-center px-px py-0.5 text-[16px] tracking-wide leading-5 text-slate-950 max-md:max-w-full text-left">
              <span className="font-bold text-slate-950">Mai Xuân Toản (+84) 0333084060</span> <span className="text-slate-950">1135 Huỳnh Tấn Phát, Q7, TP. Hồ Chí Minh</span>
            </div>
            <div className="flex-shrink-0 justify-center p-1 text-xs tracking-wide leading-4 text-orange-600 whitespace-nowrap border border-solid aspect-[2.9] border-[color:var(--Light-teriary-red-50,#E54925)]">
              Mặc định
            </div>
          </div>
        </div>
        {/* cart info */}
        <div>
          <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
            <div className="flex flex-col w-[68%] max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col py-5 max-md:mt-8 max-md:max-w-full">
                <div className="flex flex-col text-xl font-semibold leading-8 bg-white rounded-lg text-slate-950 max-md:max-w-full">
                  <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-2 w-[44%] justify-between p-2.5 whitespace-nowrap">
                      <span className="grow">Sản Phẩm</span>
                    </div>
                    <div className="flex flex-col ml-5 w-[56%] max-md:hidden">
                      <div className="flex gap-5 justify-between self-stretch my-auto w-full max-md:mt-10">
                        <div className="flex gap-2.5 w-5/12 items-center px-5">
                          <div className="my-auto">Số Lượng</div>
                        </div>
                        <div className="flex gap-5 w-7/12 justify-between pr-5 my-auto text-base font-bold tracking-wide text-center text-slate-950">
                          <div>Đơn Giá</div>
                          <div>Tạm Tính </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 h-0.5 bg-zinc-300 rounded-[999px] max-md:max-w-full" />
                </div>
                {Array.from({ length: 3 }).map((item: any, index: number) => {
                  return (
                    <div key={index} className="flex flex-col pt-2.5 mt-5 bg-white rounded-lg max-md:max-w-full">
                      <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                            <div className="pl-2.5 flex grow gap-[8px] justify-start max-md:mt-0">
                              <div className="flex gap-2 justify-between grow">
                                <div className="flex flex-col flex-1 max-md:flex-none max-md:justify-center items-center min-w-[130px] max-md:min-w-[80px] p-[13px] pb-1.5 rounded-lg bg-zinc-100 max-md:px-5">
                                  {/* eslint-disable-next-line */}
                                  <img alt="media" loading="lazy" srcSet="/images/product-img/cacao_mockup.png" className="aspect-[0.7] w-[57px]" />
                                </div>
                                <div className="flex flex-col flex-1 pr-5 max-md:pr-2.5 my-auto whitespace-nowrap relative">
                                  <div className="flex items-center justify-start max-md:justify-between">
                                    <div className="text-base tracking-wide text-slate-950">COLDBREW Cà phê</div>
                                    <div className="cursor-pointer w-fit justify-center p-[5px] mt-0 text-[14px] text-black border-b border-solid border-b-[#050226]">Xóa</div>
                                  </div>
                                  <div className="flex flex-col items-start max-md:mt-1 md:hidden justify-start text-base font-bold tracking-wide text-center text-slate-950">
                                    <div>220.000 vnd x 3</div>
                                    <div>660.000 vnd</div>
                                  </div>
                                  <div className="flex w-full items-center mt-1 md:hidden">
                                    <p className="justify-center items-center self-stretch px-3 text-base tracking-normal leading-2 text-sky-600 whitespace-nowrap rounded-lg">{1}</p>
                                  </div>
                                  <div className="cursor-pointer w-fit justify-center p-[10px] max-md:hidden right-0 top-0 text-[14px] text-black border-b border-solid border-b-[#050226]">Xóa</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[56%] max-md:hidden max-md:w-full">
                            <div className="flex gap-5 justify-between self-stretch my-auto w-full max-md:mt-10">
                              <div className="flex gap-2.5 w-5/12 items-center px-5">
                                <p className="justify-center items-center self-stretch px-3 text-base tracking-normal leading-2 text-sky-600 whitespace-nowrap rounded-lg">{1}</p>
                              </div>
                              <div className="flex gap-5 w-7/12 justify-between pr-5 my-auto text-base font-bold tracking-wide text-center text-slate-950">
                                <div>220.000vnd</div>
                                <div>660.000 vnd</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 mt-1.5 h-0.5 bg-zinc-300 rounded-[999px] max-md:max-w-full" />
                    </div>
                  )
                })}

                <div className="flex flex-col justify-center mt-5 max-w-full text-sm tracking-widest leading-5 text-center whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Light-Secondary-purple-30,#050226)] text-slate-950 w-[269px]">
                  <div className="flex gap-2 items-center justify-between px-8 py-2 max-md:px-5">
                    <FaLongArrowAltLeft size={24} className="aspect-square" />
                    <div className="grow my-auto">Tiếp Tục Xem Sản Phẩm</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[32%] max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col grow px-2.5 py-5 text-slate-950 max-md:mt-0 ">
                <div className="bg-white px-[10px] py-[20px] pb-[10px]">
                  <div className="text-xl font-bold leading-8">Tổng Cộng</div>
                  <div className="shrink-0 mt-2.5 h-0.5 bg-zinc-300 rounded-[999px]" />
                  <div className="flex gap-5 justify-between mt-5 text-base tracking-wide">
                    <div>Tạm Tính </div>
                    <div className="font-bold text-center">660.000 vnd</div>
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex-auto text-base tracking-wide">Phí vận chuyển</div>
                    <div className="flex-auto text-right my-auto text-xs tracking-wide leading-4">Miễn phí vận chuyển</div>
                  </div>
                  <div className="shrink-0 mt-2 h-px bg-zinc-300 bg-opacity-50 rounded-[999px]" />
                  <div className="flex gap-5 justify-between mt-5 text-base tracking-wide">
                    <div>Tổng</div>
                    <div className="font-bold text-center">660.000 vnd</div>
                  </div>
                  <div className="shrink-0 mt-2 h-0.5 bg-zinc-300 bg-opacity-50 rounded-[999px]" />
                </div>

                <div className="flex flex-col py-2.5 pr-9 pl-2.5 text-base tracking-normal leading-6 bg-white rounded-lg w-full text-slate-950 mt-[20px]">
                  <div className="text-lg font-bold tracking-normal leading-6 text-sky-600">PHƯƠNG THỨC THANH TOÁN</div>
                  <label className="flex gap-2.5 items-center mt-3 whitespace-nowrap" htmlFor="cod">
                    <input type="radio" name="payment_method" id="cod" className="self-stretch my-auto w-5 aspect-square" />
                    {/* eslint-disable-next-line */}
                    <img alt="media" loading="lazy" src="/images/icons/ic-cod.svg" className="self-stretch w-7 aspect-square" />
                    <div className="grow self-stretch my-auto">Thanh toán tiền mặt khi nhận hàng</div>
                  </label>
                  <label className="flex gap-2.5 items-center mt-3" htmlFor="momo">
                    <input type="radio" name="payment_method" id="momo" className="self-stretch my-auto w-5 aspect-square" />
                    {/* eslint-disable-next-line */}
                    <img alt="media" loading="lazy" src="/images/icons/ic-momo.svg" className="self-stretch w-7 aspect-square" />
                    <div className="flex-auto self-stretch my-auto">Thanh toán bằng ví MoMo</div>
                  </label>
                  <label className="flex gap-2.5 items-center mt-3" htmlFor="zalo_pay">
                    <input type="radio" name="payment_method" id="zalo_pay" className="self-stretch my-auto w-5 aspect-square" />
                    {/* eslint-disable-next-line */}
                    <img alt="media" loading="lazy" src="/images/icons/ic-zalopay.svg" className="self-stretch w-7 aspect-square" />
                    <div className="flex-auto self-stretch my-auto">Thanh toán bằng ví ZaloPlay</div>
                  </label>
                </div>
                <div
                  onClick={() => setOpen(true)}
                  className="cursor-pointer justify-center items-center self-center px-16 py-1.5 mt-5 w-[90%] max-w-full text-lg tracking-normal leading-7 text-center whitespace-nowrap bg-sky-600 rounded text-neutral-50 max-md:px-5"
                >
                  Đặt hàng
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cart info end */}
        <FeaturedProducts />
      </div>
      <ModalOrderSuccess setOpen={setOpen} open={open} />
    </>
  )
}
export default ShoppingCart
