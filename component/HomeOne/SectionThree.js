import { Accordion } from "react-bootstrap";
export default function SectionThree() {
	return (
		<div className="section bg-black zuzu-section-padding3">
			<div className="container">
				<div className="zuzu-section-title">
					<div className="zuzu-default-content large dark">
						<h2>Here is what we can do for you</h2>
					</div>
				</div>
				<div
					className="zuzu-iconbox-bg"
					style={{ backgroundImage: "url('/images/all-img/v2/shape-dots.png')" }}
				>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="zuzu-iconbox-wrap wow fadeInUpX" data-wow-delay="0.1s">
								<div className="zuzu-iconbox-icon">
									<img src="/images/all-img/v2/n_1.png" alt="" />
								</div>
								<div className="zuzu-iconbox-data">
									<h4>Web Development</h4>
									<p>
										We've got your web development covered! From custom websites and e-commerce solutions to optimizing and maintaining your site, 
										we'll ensure it's tailored to your needs, performs well, and stays up-to-date.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="zuzu-iconbox-wrap custom_margin_b wow fadeInUpX" data-wow-delay="0.2s">
								<div className="zuzu-iconbox-icon">
									<img src="/images/all-img/v2/n_2.png" alt="" />
								</div>
								<div className="zuzu-iconbox-data">
									<h4>Tutoring & Couching</h4>
									<p>
									Embark on your tech or content creation journey with us and receive personalized tutoring, career guidance, bootcamp preparation, and expert consultation to help you succeed.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="zuzu-iconbox-wrap wow fadeInUpX" data-wow-delay="0.3s">
								<div className="zuzu-iconbox-icon">
									<img src="/images/all-img/v2/n_3.png" alt="" />
								</div>
								<div className="zuzu-iconbox-data">
									<h4>Community Building, & Content Creation</h4>
									<p>
									Boost your online presence, engage your audience, and create compelling content. We'd love to help amplify your brand and achieve your marketing goals.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="zuzu-iconbox-wrap custom_margin_b wow fadeInUpX" data-wow-delay="0.4s">
								<div className="zuzu-iconbox-icon">
									<img src="/images/all-img/v2/n_4.png" alt="" />
								</div>
								<div className="zuzu-iconbox-data">
									<h4>Blockchain Development</h4>
									<p>
									Harness the potential of blockchain with our secure smart contract development, decentralized application (DApp) guidance, seamless integration, and comprehensive audit and security services.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
