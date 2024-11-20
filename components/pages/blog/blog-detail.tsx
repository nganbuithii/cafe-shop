import Breadcrumb from "components/common/breadcrumb"
import { useRouter } from "next/router"
import { useLanguage } from "hooks/useLanguage"
import Image from "next/image"
import styles from "./style/style.module.scss"
const BlogDetail = () => {
    const router = useRouter()
    const { t } = useLanguage()
    return (
        <div className="container flex flex-col gap-[5px] md:gap-[10px]">
            <Breadcrumb breadcrumb={[{ title: t.blog, href: "/blog" }, { title: "NGUỒN CUNG CẤP NGUYÊN LIỆU", href: `/blog/${router.query.slug}` }]} />
            <div className="flex justify-between flex-wrap gap-[10px]">
                <div className="text-[16px] font-bold md:text-[40px]">NGUỒN CUNG CẤP NGUYÊN LIỆU </div>
                <div className="flex gap-[10px] items-center justify-end">
                    <Image width={24} height={24} src={"/images/icons/ic-calendar.svg"} alt="icon" />
                    <div className="text-[12px] text-opacity-70 text-black">28/09/2022</div>
                </div>
            </div>
            <div className={styles.containerImage}>
                <Image src={"/images/blog-imgs/blog-detail-img1.png"} priority alt={"image"} layout="fill" />
            </div>
            <div
                className={`${styles.contentEditor} mt-[10px] md:mt-[20px]`}
                dangerouslySetInnerHTML={{
                    __html: `<p><span style="white-space:pre-wrap;">Architectural phenomenology is a movement within architecture that began in the 1950s, reaching a wide audience in the late 1970s and 1980s, and continuing until today. Architectural phenomenology focuses on human experience, background, intention and historical reflection, interpretation as well as poetic and ethical considerations with authors such as Gaston Bachelard.[21]</span></p ><p><br><span style="white-space:pre-wrap;">Islamic architecture began in the 7th century CE, incorporating architectural forms from the ancient Middle East and Byzantium, but also developing features to suit the religious and social needs of the society. Examples can be found throughout the Middle East, North Africa, Spain and the Indian Sub-continent.</span></p><p>&nbsp;</p><blockquote><p><span style="white-space:pre-wrap;">“Architecture is really about well-being. I think that people want to feel good in a space… On the one hand it’s about shelter, but it’s also about pleasure.”</span><br><br><span style="white-space:pre-wrap;">- Dr. Anders Ericsson</span></p></blockquote><p>&nbsp;</p><p><span style="white-space:pre-wrap;">The most important aspect of beauty was, therefore, an inherent part of an object, rather than something applied superficially, and was based on universal, recognisable truths. The notion of style in the arts was not developed until the 16th century, with the writing of Vasari:[11] by the 18th century, his Lives of the Most Excellent Painters, Sculptors, and Architects had been translated into Italian, French, Spanish, and English.</span></p><p>&nbsp;</p><blockquote><p><span style="white-space:pre-wrap;"><strong>Kyle Frederick</strong></span></p><p><br><span style="white-space:pre-wrap;">Saasbiz is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design.</span></p></blockquote>`
                }}>
            </div>
        </div >
    )
}
export default BlogDetail