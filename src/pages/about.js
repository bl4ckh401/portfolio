import Head from "next/head";
import SectionAbout from "../../component/About/SectionAbout";
import SectionFeatures from "../../component/About/SectionFeatures";
import SectionMission from "../../component/About/SectionMission";
import Breadcrumb from "../../component/common/Breadcrumb";
import CounterOne from "../../component/common/Counter/CounterOne";
import FaqOne from "../../component/common/Faq/FaqOne";
import TeamOne from "../../component/common/Team/TeamOne";

export default function About() {
	return (
		<>
			<Head>
				<title>About | Pav Programs | Blockchain Dev</title>
			</Head>

			<Breadcrumb dark title={"About"} />
			<SectionAbout dark />
			<CounterOne dark />
			<SectionMission dark />
			<SectionFeatures dark />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
