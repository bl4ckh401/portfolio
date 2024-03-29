import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function CtaSection() {
	const [mail, setMail] = useState(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState();
	const [messageState, setMessageState] = useState("");

	const Subscribe = async (e) => {
		e.preventDefault();
		setLoading(true);
		axios
		  .put("/api/mailingList", {
			mail: mail,
		  })
		  .then((res) => {
			if (res.status === 200) {
			  setLoading(false);
			  setSuccess(true);
			  setMessageState(res.data.message);
			} else {
			  setLoading(false);
			  setMessageState(res.data.message);
			}
		  })
		  .catch((err) => {
			setLoading(false);
			setMessageState(String(err.message));
		  });
	  };
	
	return (
		<div className="zuzu-cta-section bg-gray-500">
			<div className="container">
				<div className="zuzu-cta-wrap" style={{ backgroundImage: "url('/images/all-img/v1/cta-bg.png')" }}>
					<div className="row">
						<div className="col-xl-7 order-xl-2">
							<div className="zuzu-default-content dark large font-cabin">
								<h2>Reach out and say Hi.</h2>
								<p>
									Let's talk about your new project. I'll help you get some insights and shelp project be a success.
								</p>
								<div className="zuzu-cta-btn-wrap">
									<Link href={"https://www.youtube.com/@pavprograms3445"} legacyBehavior>
										<a className="zuzu-app-btn bg-black px-3 py-2 rounded-pill">
											<p>View on Youtube</p>
										</a>
									</Link>
									<Link href={"contact"} legacyBehavior>
										<a className="zuzu-app-btn bg-black px-3 py-2 rounded-pill">
											<p>Send Email</p>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-5">
							<div className="zuzu-cta-thumb wow fadeInUpX" data-wow-delay="0.1s">
								<img src="/images/all-img/v1/wave.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
