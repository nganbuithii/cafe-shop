import React, { memo } from "react"
import { useLanguage } from "hooks/useLanguage"
import { useProduct } from "stores/product"
import ContentItem from "./content-item"

const ProductDescription = () => {
  const { t } = useLanguage()
  const [storeProduct] = useProduct()

  return (
    <>
      {/*  <ContentItem
        title={t.productDescription}
        defaultStatus={true}
        key={1}
        images={storeProduct.product.product_image_details}
        description={storeProduct.product.product_description || t.noProductDescriptionAvailable}
        />
      <ContentItem title={t.purchasePolicy} key={2} description={t.purchasePolicyDescription} /> */}
      <div className="flex flex-col bg-white rounded-[8px]">
        <div className="justify-center px-11 py-5 mt-5 w-full text-base tracking-wide leading-5 text-slate-950 max-md:px-5 max-md:max-w-full">
          Cà Phê Pha Lạnh - COLDBREW - WOWI CAFE - Ngọt dịu, chua thanh, hậu vị cân bằng [1 Kí]  THÔNG TIN SẢN PHẨM Thương hiệu: Wowi Khối lượng: 1Kg Thành Phần: Cà phê Arabica nguyên chất 100%, không
          chất bảo quản, độ ẩm &lt; 5%, hàm lượng cafein &gt;1.5% Hương vị: Chua thanh vị cam, ngọt hậu - Quy trình sơ chế: Wash Xuất xứ: Di Linh - Cao nguyên Lâm Viên, Lâm Đồng - Việt Nam Quy cách
          đóng gói:  Cà phê rang xay nguyên chất Wowi được xay theo các mức pha phin Được đựng trong gói được hàn kín miệng, có van thoát khí một chiều từ Ý, có zipper tiện lợi khi sử dụng và bảo quản
          cà phê giữ trọn hương vị tốt nhất
        </div>
        <div className="justify-center px-20 mt-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              {/* eslint-disable-next-line */}
              <img loading="lazy" srcSet="/images/product-img/mockup/product_desc1.png" className="w-full aspect-square max-md:mt-8 max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              {/* eslint-disable-next-line */}
              <img loading="lazy" srcSet="/images/product-img/mockup/product_desc2.png" className="w-full aspect-square max-md:mt-8 max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(ProductDescription)
