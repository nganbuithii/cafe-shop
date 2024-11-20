import {useMediaQuery} from "react-responsive"

export const useMeasurements = () => {
  return {
    isMedium: useMediaQuery({ maxWidth: 1024 }),
    isMobile: useMediaQuery({ maxWidth: 865 }),
    isMobileSM: useMediaQuery({ maxWidth: 639.98 }),
    isMobileXS: useMediaQuery({ maxWidth: 479.98 }),
    isMobileSMALL: useMediaQuery({ maxWidth: 375.98 })
  }
}
