import Head from "next/head";
import ContactSection from "../../component/Contact/ContactSection";
import Breadcrumb from "../../component/common/Breadcrumb";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact | Pav Programs | Blockchain Dev</title>
			</Head>

			<Breadcrumb dark title="Contact Us" />
			<ContactSection dark />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
