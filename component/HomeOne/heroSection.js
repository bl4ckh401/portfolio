import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function HeroSection() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div>
			<div
				className="zuzu-hero-section bg-cover"
				style={{ backgroundImage: "url(/images/all-img/v1/hero-bg.png)" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 d-flex align-items-center">
							<div className="zuzu-hero-content zuzu-dark-content font-cabin">
								<h1 className="wow fadeInUpX" data-wow-delay="0s">
									Transforming Dreams into Reality
								</h1>
								<p className="wow fadeInUpX" data-wow-delay="0.25s">
								Are you ready to bring your ideas to life? We specialize in turning your dreams into reality. 
								Whether you're an entrepreneur, a small business owner, or an individual with a vision, we are here to help you achieve your goals.
								</p>
								<div className="zuzu-hero-btn-wrap">
									<Link href={"contact"} legacyBehavior>
										<a className="zuzu-btn btn-white pill wow fadeInUpX" data-wow-delay="0.40s">
											Get started now
										</a>
									</Link>
									{/* <Link href={"#"} legacyBehavior>
										<a className="zuzu-popup zuzu-popup-hero" onClick={() => setOpen(true)}>
											<img src="/images/all-img/v1/play-button.png" alt="" />
											<div className="waves wave-1" />
											<div className="waves wave-2" />
											<div className="waves wave-3" />
											How it works
										</a>
									</Link> */}
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="zuzu-hero-card1">
								<Image width={600} height={600} src="/images/logo/Logo.png" alt="" />
							</div>
							{/* <div className="zuzu-hero-card2">
								<img src="/images/all-img/v1/card02.png" alt="" />
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="7e90gBu4pas"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
