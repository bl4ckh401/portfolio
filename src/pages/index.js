import Head from "next/head";
import HeroSection from "../../component/HomeOne/heroSection";
import SectionOne from "../../component/HomeOne/sectionOne";
import SectionTwo from "../../component/HomeOne/sectionTwo";
import SectionThree from "../../component/HomeOne/SectionThree";
// import SectionFour from "../../component/HomeOne/sectionFour";
import CardSliderOne from "../../component/common/sliders/Card/CardSliderOne";
import SectionEight from "../../component/HomeOne/SectionEight";
import CtaSection from "../../component/HomeOne/ctaSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>HOME | PavPrograms | Full-Stack Dev</title>
			</Head>
			<HeroSection />
			<SectionThree />
			{/* <CounterOne /> */}
			<SectionOne />
			<SectionTwo />
			{/* <TextSliderOne /> */}
			<CardSliderOne />
			{/* <SectionFour /> */}
			<CtaSection/>
			<SectionEight />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
