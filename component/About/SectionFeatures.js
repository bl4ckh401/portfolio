export default function SectionFeatures({ dark }) {
	return (
		<div className={`section zuzu-section-padding3  ${dark ? "bg-gray-800" : "bg-gray-400"}`}>
			<div className="container">
				<div className="zuzu-section-title">
					<div className={`zuzu-default-content ${dark && "dark"}`}>
						<h5>
							<strong>Our core values</strong>
						</h5>
						<h2 className="font-black">Innovative features that make us unique to everyone</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div
							className={`zuzu-iconbox-wrap7 active wow fadeInUpX ${dark && "dark"}`}
							data-wow-delay="0s"
						>
							<div className="zuzu-iconbox-icon7">
								<img src="/images/all-img/about/icon1.png" alt="" />
							</div>
							<div className="zuzu-iconbox-data7">
								<h4>Creativity</h4>
								<p>
									We foster a culture of innovation by encouraging and embracing out-of-the-box thinking, empowering individuals to push boundaries and unlock their creative potential. 
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`zuzu-iconbox-wrap7 wow fadeInUpX ${dark && "dark"}`} data-wow-delay="0.1s">
							<div className="zuzu-iconbox-icon7">
								<img src="/images/all-img/about/icon2.png" alt="" />
							</div>
							<div className="zuzu-iconbox-data7">
								<h4>Integrity</h4>
								<p>
									Integrity is at the heart of Pav Programs, guiding our commitment to honesty, transparency, and ethical practices as we empower individuals on their tech journeys.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							className={`zuzu-iconbox-wrap7 active wow fadeInUpX ${dark && "dark"}`}
							data-wow-delay="0.2s"
						>
							<div className="zuzu-iconbox-icon7">
								<img src="/images/all-img/about/icon3.png" alt="" />
							</div>
							<div className="zuzu-iconbox-data7">
								<h4>Consistency</h4>
								<p>
									We are dedicated to delivering high-quality content, reliable support, and continuous learning opportunities to help you achieve your tech aspirations with steadfast confidence.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`zuzu-iconbox-wrap7 wow fadeInUpX ${dark && "dark"}`} data-wow-delay="0.3s">
							<div className="zuzu-iconbox-icon7">
								<img src="/images/all-img/about/icon4.png" alt="" />
							</div>
							<div className="zuzu-iconbox-data7">
								<h4>Community</h4>
								<p>
									We are a supportive and collaborative network of tech enthusiasts, sharing experiences, knowledge, and inspiration to foster personal growth.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							className={`zuzu-iconbox-wrap7 active wow fadeInUpX ${dark && "dark"}`}
							data-wow-delay="0.4s"
						>
							<div className="zuzu-iconbox-icon7">
								<img src="/images/all-img/about/icon5.png" alt="" />
							</div>
							<div className="zuzu-iconbox-data7">
								<h4>Growth</h4>
								<p>
									We embrace continuous learning, innovation, and adaptation, empowering individuals to expand their skills, explore new horizons, and unlock their full potential.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`zuzu-iconbox-wrap7 wow fadeInUpX ${dark && "dark"}`} data-wow-delay="0.5s">
							<div className="zuzu-iconbox-icon7">
								<img src="/images/all-img/about/icon6.png" alt="" />
							</div>
							<div className="zuzu-iconbox-data7">
								<h4>Client Oriented</h4>
								<p>
									We prioritize understanding the unique needs of our clients, providing tailored solutions, exceptional support, and an enriching experience that exceeds their expectations.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
