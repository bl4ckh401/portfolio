import Image from "next/image";
import Community from "./Componnet/Community";
import CopyRightText from "./Componnet/CopyRightText";
import FooterMenu from "./Componnet/FooterMenu";
import Resources from "./Componnet/Resources";
import SocialIcon from "./Componnet/SocialIcon";
import Subscribe from "./Subscribe";

export default function FooterHomeOne() {
	return (
		<footer className="zuzu-footer-section bg-gray-500">
			<div className="container">
				<div className="zuzu-footer-top">
					<div className="row">
						<div className="col-xl-3">
							<div className="zuzu-textarea">
								<div className="zuzu-footer-logo">
									<Image width={100} height={100} src="/images/logo/Logo.png" alt="" className="light-version-logo" />
								</div>
								<SocialIcon />
							</div>
						</div>
						<div className="col-xl-2 offset-xl-1 col-lg-3 col-md-3">
							<Community />
						</div>
						<div className="col-xl-3 col-lg-4 col-md-3">
							<Resources />
						</div>
						<div className="col-xl-3 col-lg-5 col-md-6">
							<div className="zuzu-footer-menu">
								<Subscribe />
							</div>
						</div>
					</div>
				</div>
				<div className="zuzu-footer-bottom">
					<div className="row">
						<div className="col-lg-6 col-md-8">
							<CopyRightText />
						</div>
						<div className="col-lg-6 col-md-4">
							<div className="zuzu-footer-menu">
								<FooterMenu />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
