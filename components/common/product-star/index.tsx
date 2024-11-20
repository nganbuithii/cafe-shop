import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5"
import { Fragment } from "react"
interface Props {
  totalStars: number
}
const StarList = (props: Props) => {
  const renderStarArray = (total: number) => {
    const arr = []
    Array.from({ length: total }, (_, i) => {
      arr.push(<IoStar key={i} color={"#fcdf3a"} className="StarPurple500 w-4 h-4" />)
    })
    if (total - Math.floor(total) > 0.3) {
      arr.push(<IoStarHalf color={"#fcdf3a"} className="StarPurple500 w-4 h-4" />)
    }
    Array.from(
      {
        length: Math.ceil(5 - (total - Math.floor(total) > 0.3 ? Math.floor(total) + 1 : Math.floor(total)))
      },
      (_, i) => arr.push(<IoStarOutline key={i} color={"#fcdf3a"} className="StarPurple500 w-4 h-4" />)
    )
    return arr
  }
  return (
    <div className="Frame5258 h-4 justify-start items-start gap-1 inline-flex mt-auto">
      {renderStarArray(props.totalStars).map((star, index) => (
        <Fragment key={index}>{star}</Fragment>
      ))}
    </div>
  )
}

export default StarList
