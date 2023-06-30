import Head from "next/head";
import TeamSection from "../../component/Team/TeamSection";
import Breadcrumb from "../../component/common/Breadcrumb";

export default function TeamDark() {
	return (
		<>
			<Head>
				<title>Zuzu - Team Dark </title>
			</Head>

			<Breadcrumb dark title="Team" />
			<TeamSection dark />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
