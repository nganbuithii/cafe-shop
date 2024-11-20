import Contact from "components/pages/contact-us"
import { useEffect } from "react"
const ContactUs = () => {
  useEffect(() => {
    document.body.style.background = "#fafafa"
  }, [])
  return (
    <>
      <Contact />
    </>
  )
}
export default ContactUs
