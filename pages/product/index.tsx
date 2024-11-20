import { useRouter } from "next/router"
import BannerTop from "components/common/banners/banner-top"
import { Fragment, useEffect, useState } from "react"
import useDeviceDetect from "hooks/useDeviceDetect"
// import { getProductByCategoryService } from "services/product"
// import { GetServerSideProps } from "next"
import { PRODUCT_MODEL } from "models/product.model"
// import ProductByCategory from "components/pages/product/product-by-category"
// import ProductInfiniteScroll from "components/pages/product/product-infinite-scroll"
// import ProductByZili from "components/pages/product/product-by-zili"
import ProductFilter from "components/pages/product/filter"
// import Categories from "components/pages/product/categories"
// import { CATEGORY_ENUM } from "constants/base.constant"
// import { SCREEN_ITEM_STATUS } from "constants/page-component.constant"
// import { PARAM_PRODUCT_TYPE, LIMIT_ON_SCREEN } from "constants/product.constant"
import Breadcrumb from "components/common/breadcrumb"
import Heading from "components/common/heading"
import Pagination from "components/common/pagination"
import Product from "components/common/product"

interface ProductListProps {
  products: Array<PRODUCT_MODEL>
  productTrial: Array<PRODUCT_MODEL>
  productTraditional: Array<PRODUCT_MODEL>
  productForStore: Array<PRODUCT_MODEL>
  productConvenient: Array<PRODUCT_MODEL>
  productZili: Array<PRODUCT_MODEL>
  totalRecord: number
}

const ProductList = (props: ProductListProps) => {
  const currentDevice = useDeviceDetect()
  const [isMobile, setIsMobile] = useState(false)
  const [page, setPage] = useState(0)
  const router = useRouter()
  // const category = router.query.category

  const breadcrumb = [
    {
      href: "/product",
      title: "Sản phẩm"
    }
  ]

  useEffect(() => {
    setIsMobile(currentDevice.isMobile())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-[#fafafa]">
      <div className="md:block hidden">
        <BannerTop isMobile={isMobile} />
      </div>
      {/* <Categories /> */}
      <div className="container container-full-phone">
        <Breadcrumb breadcrumb={breadcrumb} className="pt-[20px]" />
      </div>
      <ProductFilter totalRecord={props.totalRecord} />
      <div className="container">
        <Heading title="Tất cả sản phẩm" description="Ghé shop để xem sản phẩm tuyệt vời" className="mt-[20px] md:mb-[40px] mb-[20px]" />
        <div className="w-full max-md:max-w-full">
          <div className="gap-[30px] max-md:gap-[20px] grid max-md:grid-cols-2 grid-cols-4 md:pb-[40px] pb-[20px]">
            {Array.from({ length: 16 }).map((item: any, index: number) => {
              return (
                <Fragment key={index}>
                  <Product />
                </Fragment>
              )
            })}
          </div>
        </div>
        <div className="pb-[30px]">
          <Pagination page={page} total={48 || 0} perPage={16} setPage={setPage} />
        </div>
      </div>
      {/* {!category ? (
        <>
          <ProductByCategory data={props?.productTrial} type={CATEGORY_ENUM.productTrial} icons={true} />
          <ProductByCategory data={props?.productTraditional} type={CATEGORY_ENUM.productTraditional} icons={true} />
          <ProductByCategory data={props?.productForStore} type={CATEGORY_ENUM.productForStore} icons={false} />
          <ProductByCategory data={props?.productConvenient} type={CATEGORY_ENUM.productConvenient} icons={false} />
          <ProductByZili data={props?.productZili} type={CATEGORY_ENUM.productZili} icons={false} />
        </>
      ) : (
        <ProductInfiniteScroll />
      )}
      {category === CATEGORY_ENUM.productZili && <ProductByZili data={props?.products} type={CATEGORY_ENUM.productZili} icons={false} />} */}
    </div>
  )
}

export default ProductList

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.query.category as string
  const filter = context.query.filter as string
  if (category) {
    const products = await getProductByCategoryService({ loai: category || "", tu: 0, den: LIMIT_ON_SCREEN, loc: filter || "", "trang-thai": SCREEN_ITEM_STATUS.ACTIVE })
    return {
      props: {
        products: products.data.products,
        totalRecord: products.data.totalRecords
      }
    }
  } else {
    const promiseProductTrial = getProductByCategoryService({
      loai: PARAM_PRODUCT_TYPE.PRODUCT_TRIAL || "",
      tu: 0,
      den: LIMIT_ON_SCREEN,
      loc: filter || "",
      "trang-thai": SCREEN_ITEM_STATUS.ACTIVE
    })
    const promiseProductTraditional = getProductByCategoryService({
      loai: PARAM_PRODUCT_TYPE.PRODUCT_TRADITIONAL || "",
      tu: 0,
      den: LIMIT_ON_SCREEN,
      loc: filter || "",
      "trang-thai": SCREEN_ITEM_STATUS.ACTIVE
    })
    const promiseProductForStore = getProductByCategoryService({
      loai: PARAM_PRODUCT_TYPE.PRODUCT_FOR_STORES || "",
      tu: 0,
      den: LIMIT_ON_SCREEN,
      loc: filter || "",
      "trang-thai": SCREEN_ITEM_STATUS.ACTIVE
    })
    const promiseProductConvenient = getProductByCategoryService({
      loai: PARAM_PRODUCT_TYPE.PRODUCT_CONVENIENT || "",
      tu: 0,
      den: LIMIT_ON_SCREEN,
      loc: filter || "",
      "trang-thai": SCREEN_ITEM_STATUS.ACTIVE
    })
    const promiseProductZili = getProductByCategoryService({
      loai: PARAM_PRODUCT_TYPE.PRODUCT_ZILI || "",
      tu: 0,
      den: LIMIT_ON_SCREEN,
      loc: filter || "",
      "trang-thai": SCREEN_ITEM_STATUS.ACTIVE
    })

    const promiseAll = await Promise.all([promiseProductTrial, promiseProductTraditional, promiseProductForStore, promiseProductConvenient, promiseProductZili])
    const [productTrial, productTraditional, productForStore, productConvenient, productZili] = promiseAll
    const totalRecord = promiseAll.reduce((total: number, item: any) => {
      return (total = +total + +item.data.totalRecords)
    }, 0)

    return {
      props: {
        productTrial: productTrial.data?.products,
        productTraditional: productTraditional.data?.products,
        productForStore: productForStore.data?.products,
        productConvenient: productConvenient.data?.products,
        productZili: productZili.data?.products,
        totalRecord: totalRecord
      }
    }
  }
} */
