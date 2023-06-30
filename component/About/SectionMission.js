import Image from "next/image";
import Link from "next/link";

export default function SectionMission({ dark }) {
	return (
		<div className={`section zuzu-section-padding ${dark && "bg-gray-500"}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 order-lg-2">
						<div className="zuzu-thumb wow fadeInUpX position-relative" data-wow-delay="0.10s">
							<Image width={700} height={900} className="top-0" src="/images/all-img/v1/Pavoo.png" alt="" />
						</div>
					</div>
					<div className="col-lg-5 d-flex align-items-center">
						<div className={`zuzu-default-content ${dark && "dark"}`}>
							<h5>
								<strong>What do I aim to achieve?</strong>
							</h5>
							<h2 className="font-black">Inspire 100k+ people to join tech</h2>
							<p>
							My goal is to inspire and empower over 100,000+ individuals to pursue careers in the tech industry, Including myself! 
							By showcasing the impact of technology, providing information and guidance, promoting diversity and inclusivity, fostering a supportive community, and partnering with industry leaders, 
							together we can open doors to endless opportunities in the world of tech.
							</p>
							<div className="zuzu-btn-wrap">
								<Link href={"/contact-light"} legacyBehavior>
									<a className="zuzu-btn btn-deep-blue rounded-pill">Get in touch</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
