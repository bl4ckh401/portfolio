import axios from "axios";
import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

export default function SectionEight() {
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
		<div className="section bg-gray-500">
			<div className="container">
				<div className="zuzu-newsletter-wrap">
					<div className="zuzu-default-content sm dark font-syne">
						<h2>Join our community of like-minded Protoges</h2>
						<div className="zuzu-newsletter-field wow fadeInUpX" data-wow-delay=".10s">
							<input type="email" placeholder="Type your email here" 
							autoComplete="email"
							required
							onChange={(e) => setMail(e.target.value)}/>
							<button id="zuzu-newsletter-btn" type="submit" onClick={Subscribe}>
							{!loading ? (
									"SUBSCRIBE"
								) : (
									<div className="flex w-full items-center justify-center ">
									<RiLoader5Fill className="w-8 animate-spin" />
									</div>
								)}
							</button>
							{success ? (
								<p className="mt-2 text-green-400 dark:text-green-400">
								{messageState}
								</p>
							) : (
								<p className="mt-2 text-pink-500 dark:text-pink-500">
								{messageState}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
