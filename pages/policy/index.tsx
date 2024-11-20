import { useEffect } from "react"
import Breadcrumb from "components/common/breadcrumb"
import { useLanguage } from "hooks/useLanguage"
import { DEFAULT_LANGUAGE } from "constants/base.constant"
const Policy = () => {
  const { t, locale } = useLanguage()
  useEffect(() => {
    document.body.style.background = "#fafafa"
  }, [])

  return (
    <div className="container">
      <Breadcrumb breadcrumb={[{ title: t.Policy, href: "/policy" }]} />
      {locale === DEFAULT_LANGUAGE ? (
        <div className="flex flex-col text-xl font-bold leading-5 text-black mt-[20px] max-md:mt-[10px]">
          <div className="w-full tracking-wide leading-8 max-md:max-w-full">
            1. TERMS OF USE:
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5">
              1.1 By accessing this website, you agree to the terms of use below. Please read these terms carefully before using this website.
              <br />
              1.2 If you do not agree to these Terms of Use, you are not permitted to access or use this website.
              <br />
              1.3 We may adjust these Terms of Use at any time without notice to you or giving any reason, by posting an updated version of the Terms of Use on this website. Please
              check this section regularly for changes to the Terms of Use. In the event of changes, you must comply with the updated terms. If you do not agree with the amended content
              of the Terms of Use, you must immediately cease using this website.
            </span>
          </div>
          <div className="mt-5 w-full tracking-wide leading-8 max-md:max-w-full">
            OUR PRIVACY POLICY
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              When using our services, you trust us with your information. We understand this is a big responsibility and we strive to protect your information and empower you with
              control.
            </span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              This privacy policy is intended to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.
            </span>
          </div>
          <div className="mt-5 w-full font-normal text-base tracking-wide max-md:max-w-full">
            We offer a range of services to help people buy coffee. Our services include:
            <br />
            <ul>
              <li>Applications, websites</li>
              <li>Products integrated into applications and websites to facilitate convenient shopping</li>
            </ul>
          </div>
          <div className="mt-5 w-full leading-[160%] max-md:max-w-full">PAYMENT METHODS</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            Currently, Wowi Vietnam supports 04 payment methods, including:
            <br />
            Bank transfer
            <br />
            Payment via Momo
            <br />
            Payment via Zalo Pay
            <br />
            Cash on Delivery (COD)
          </div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">1. Bank Transfer</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            - This payment method allows buyers to pay via online banking services (internet banking)
            <br />
            And applies only to orders with a final payment value (including shipping fees and other incidental expenses) of 10,000 VND or more (*)
          </div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">2. Payment via Momo</div>
          <div className="mt-5 w-full font-normal text-base tracking-wide max-md:max-w-full">- This payment method allows buyers to pay via online payment services through Momo</div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">3. Payment via Zalo Pay</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            - This payment method allows buyers to pay via online payment services through Zalo Pay
          </div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">4. Cash on Delivery (COD)</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            In addition to the above payment methods, you can also choose the Cash on Delivery (COD) option
          </div>
          <div className="mt-5 w-full tracking-wide leading-8 max-md:max-w-full">
            Return Policy
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              1. Return policy: within 3 days from the date of successful delivery, excluding Sundays and holidays; customers are entitled to exchange products free of charge when
              meeting 2 conditions:
            </span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- Products damaged due to material defects</span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- Exchange for another product of equal value or higher value than the delivered product.</span>
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              2. Refund policy: customers can only return goods at the time of delivery if the product does not match the ordering information due to customer error or change of mind,
              but must pay the delivery fee for Wowi Coffee
            </span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- The decision of Wowi Coffee is final and may change without prior notice.</span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- This policy does not apply to promotional products</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-xl font-bold leading-5 text-black mt-[20px] max-md:mt-[10px]">
          <div className="w-full tracking-wide leading-8 max-md:max-w-full">
            1. ĐIỀU KIỆN SỬ DỤNG:
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5">
              1.1 Bằng việc truy cập vào trang thông tin điện tử này, Quý khách đồng ý với các điều khoản sử dụng bên dưới. Xin vui lòng đọc kỹ các điều kiện này trước khi sử dụng trang
              thông tin điện tử này.
              <br />
              1.2 Nếu Quý khách không đồng ý với các Điều Khoản Sử Dụng này, Quý khách không được truy cập hay sử dụng trang thông tin điện tử này.
              <br />
              1.3 Chúng tôi có thể điều chỉnh các Điều Khoản Sử Dụng này vào bất kỳ lúc nào mà không cần phải thông báo cho Quý khách hay đưa ra bất kỳ lý do gì, thông qua việc đăng tải
              bản cập nhật của Điều Khoản Sử Dụng trên trang thông tin điện tử này. Đề nghị Quý khách truy cập vào mục này thường xuyên để kiểm tra sự thay đổi của Điều Khoản Sử Dụng.
              Trong trường hợp có thay đổi, Quý khách phải tuân thủ với điều khoản đã cập nhật. Nếu Quý khách không đồng ý với nội dung thay đổi của Điều Khoản Sử Dụng, Quý khách phải
              ngay lập tức ngừng việc sử dụng trang điện tử này.
            </span>
          </div>
          <div className="mt-5 w-full tracking-wide leading-8 max-md:max-w-full">
            CHÍNH SÁCH BẢO MẬT CỦA CHÚNG TÔI
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              Khi sử dụng dịch vụ của chúng tôi, bạn tin tưởng cung cấp thông tin của bạn cho chúng tôi. Chúng tôi hiểu rằng đây là một trách nhiệm lớn và chúng tôi nỗ lực bảo vệ thông
              tin của bạn cũng như để bạn nắm quyền kiểm soát.
            </span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              Chính sách bảo mật này nhằm mục đích giúp bạn hiểu rõ những thông tin chúng tôi thu thập, lý do chúng tôi thu thập và cách bạn có thể cập nhật, quản lý, xuất và xóa thông
              tin của mình.
            </span>
          </div>
          <div className="mt-5 w-full font-normal text-base tracking-wide max-md:max-w-full">
            Chúng tôi phát triển một loạt các dịch vụ giúp mọi người mua cà phê . Các dịch vụ của chúng tôi gồm có:
            <br />
            <ul>
              <li>Các ứng dụng, trang web</li>
              <li>Các sản phẩm tích hợp vào các ứng dụng và trang web giúp mua hàng tiện lợi hơn</li>
            </ul>
          </div>
          <div className="mt-5 w-full leading-[160%] max-md:max-w-full">HÌNH THỨC THANH TOÁN</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            Hiện nay Wowi Việt Nam đang hỗ trợ 04 hình thức thanh toán, bao gồm:
            <br />
            Chuyển khoản ngân hàng
            <br />
            Thanh toán qua Momo
            <br />
            Thanh toán qua Zalo Pay
            <br />
            Thanh toán khi nhận hàng (COD)
          </div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">1. Chuyển khoản ngân hàng</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            - Là hình thức thanh toán cho phép Người mua thanh toán bằng dịch vụ ngân hàng trực tuyến (internet banking)
            <br />
            Và chỉ áp dụng cho đơn hàng có giá trị thanh toán cuối cùng (gồm phí vận chuyển và các chi phí phát sinh khác) từ 10.000 VNĐ trở lên (*)
          </div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">2. Thanh toán qua Momo</div>
          <div className="mt-5 w-full font-normal text-base tracking-wide max-md:max-w-full">
            - Là hình thức thanh toán cho phép Người mua thanh toán bằng dịch vụ thanh toán trực tuyến qua Momo
          </div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">3. Thanh toán qua Zalo Pay</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            - Là hình thức thanh toán cho phép Người mua thanh toán bằng dịch vụ thanh toán trực tuyến qua Zalo Pay
          </div>
          <div className="mt-5 w-full text-sky-600 leading-[160%] max-md:max-w-full">4. Thanh toán khi nhận hàng (COD)</div>
          <div className="mt-5 font-normal w-full text-base tracking-wide max-md:max-w-full">
            Bên cạnh những hình thức thanh toán trên, bạn cũng có thể lựa chọn hình thức Thanh toán khi nhận hàng (COD)
          </div>
          <div className="mt-5 w-full tracking-wide leading-8 max-md:max-w-full">
            Chính Sách Đổi Trả
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              1. Chính sách đổi hàng: trong vòng 3 ngày tính từ ngày giao hàng thành công, không tính chủ nhật và các ngày lễ, tết; quý khách hàng được đổi sản phẩm miễn phí khi đủ 2
              điều kiện:
            </span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- Sản phẩm bị hư hỏng do lỗi nguyên liệu</span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- Đổi sang sản phẩm khác bằng giá trị hoặc có giá trị cao hơn sản phẩm đã giao.</span>
            <br />
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">
              2. Chính sách trả hàng: quý khách hàng chỉ được trả hàng tại thời điểm giao hàng nếu sản phẩm không đúng như thông tin đặt hàng do quý khách hàng đặt nhầm hoặc thay đổi ý
              kiến, nhưng phải thanh toán phí giao hàng cho Wowi Cà Phê
            </span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- Quyết định của Wowi Cà Phê là quyết định cuối cùng và có thể thay đổi mà không cần thông báo trước.</span>
            <br />
            <span className="text-base font-normal tracking-wide leading-5 ">- Chính sách này không áp dụng cho các sản phẩm khuyến mãi</span>
          </div>
        </div>
      )}
    </div>
  )
}
export default Policy
