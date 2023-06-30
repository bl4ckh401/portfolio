import Image from "next/image";

export default function SectionTwo() {
	return (
		<div className="section bg-gray-500 zuzu-section-padding-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2 d-flex align-items-end">
						<div className="zuzu-bank-card-wrap wow fadeInUpX" data-wow-delay="0.1s">
							<div className="zuzu-bank-card2">
								<Image width={600} height={400} src="/images/all-img/v1/vr.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="zuzu-default-content dark large font-cabin">
							<h2>What's the Mission ?</h2>
							<p>
								I'm here to empower you, whether you're an entrepreneur, small business owner, or individual with a vision, by providing top-notch values to help you scale your business, or yourself.
							</p>
							<div className="zuzu-icon-list dark">
								<ul>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										Tailored support for your journey.
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										Delivering exceptional value and results.
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										Transforming dreams into vibrant reality.
									</li>
									<li>
										<img src="/images/svg/check2.svg" alt="" />
										Fueling growth and driving success.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
