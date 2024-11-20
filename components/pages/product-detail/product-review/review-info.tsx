import React, { Fragment } from "react"
import RatingStar from "components/common/product-rating-star-v2"
import { useRouter } from "next/router"
import ButtonCustom from "components/common/button"
import { useLanguage } from "hooks/useLanguage"
import { useProductReview } from "stores/product-review"
import { useProduct } from "stores/product"
const ReviewInfo = () => {
  const { t } = useLanguage()
  const [storeReview] = useProductReview() as any
  const [storeProduct] = useProduct()
  const router = useRouter()

  const handleReviewProduct = () => {
    router.push(`/product/review?product=${storeProduct.product?.product_slug || ""}`).then()
  }

  return (
    <div className="lg:flex items-end w-full justify-center bg-white rounded-[8px] p-[20px] gap-[65px]">
      <div className="lg:w-[25.4861111111%] w-full">
        <div className="text-slate-950 text-[14px] font-bold leading-tight tracking-tight">{t["Overview"]}</div>
        <div className="flex-col justify-center items-start gap-1 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="5 text-slate-950 text-xl font-bold leading-loose">{0}</div>
            <div className="Frame5258 justify-start items-start gap-1 flex">
              <RatingStar totalStars={0} />
            </div>
          </div>
          <div className="600NhGi text-black text-opacity-40 text-sm font-normal   leading-tight tracking-tight">{`(0 ${t["reviews"]})`}</div>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-[16px]">
          {Array.from(Array(5).keys()).map((index) => {
            const totalStar = storeReview.reviewsByProduct?.[`totalStar${5 - index}`]
            return (
              <Fragment key={index}>
                {/* <span className="font-[500] lg:text-[16px] text-[14px] text-review">{5 - index}</span>
                  <IoStar className="my-[6px]" size={18} color={totalStar > 0 ? "var(--color-star)" : "var(--color-text-review)"} /> */}
                <div className="w-full h-full">
                  <RatingStar totalStars={5 - index} />
                </div>
                <div className="relative lg:h-[8px] h-[6px] lg:rounded-[19px] rounded-[13px] overflow-hidden bg-review">
                  <div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-review-active lg:rounded-[19px] rounded-[13px]"
                    style={{ width: `${storeReview.reviewsByProduct?.total > 0 ? (totalStar / storeReview.reviewsByProduct?.total) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-review text-end">{totalStar}</span>
              </Fragment>
            )
          })}
        </div>
      </div>
      <ButtonCustom title={t.writeReview} className="btn-primary rounded-[8px] lg:mt-[0] mt-[16px]" onClick={handleReviewProduct} linkUrl="" />
    </div>
  )
}

export default ReviewInfo
