import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
// const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function SectionAbout({ dark }) {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className={`section zuzu-section-padding ${dark && "bg-gray-500"}`}>
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div className="zuzu-thumb position-relative wow fadeInUpX" data-wow-delay="0.10s">
							<Image width={800} height={900} src="/images/all-img/v1/Standing.png" alt="" />
						</div>
					</div>
					<div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
						<div className={`zuzu-default-content ${dark && "dark"}`}>

							<h2 className="font-black">The story behind the Genius</h2>
							<p>
								Pav Programs is an innovative brand dedicated to teaching valuable lessons from the mistakes made by others. 
								With an aim for empowering beginers in the tech industry, I founded this brand to help aspiring individuals avoid common mistakes I made while starting out and achieve success. 
								Join me on this journey of learning and growth as we pave the way to a brighter future together.							
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
