import React, { memo } from "react"
import ReviewInfo from "./review-info"
import ReviewList from "./review-list"

const ProductReview = () => {
  return (
    <>
      <ReviewInfo />
      <ReviewList />
    </>
  )
}

export default memo(ProductReview)
