import { memo } from "react"

const InputCheckbox = ({ id }: { id: any }) => {
  return (
    <>
      <input id={`check-${id}`} type="checkbox" className="customize-checkbox" />
      <label htmlFor={`check-${id}`}></label>
    </>
  )
}

export default memo(InputCheckbox)
