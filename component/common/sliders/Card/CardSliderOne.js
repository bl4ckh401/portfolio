import Slider from "react-slick";

export default function CardSliderOne() {
	const settings = {
		infinity: true,
		centerMode: true,
		centerPadding: "180px",
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1499,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					centerPadding: "100px",
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					centerPadding: "70px",
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 1,
					centerPadding: "70px",
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerPadding: "0",
				},
			},
		],
	};
	return (
		<div className="section bg-gray-500 zuzu-section-padding2">
			<div className="container">
				<div className="zuzu-section-title">
					<div className="zuzu-default-content dark large font-cabin">
						<h2>
							Okay! What do Clients<br />
							say about Pavin
						</h2>
						<p>
							Few words on what clients have to say about what we have done.
						</p>
					</div>
				</div>
			</div>
			<div className="zuzu-testimonial-slider">
				<Slider {...settings}>
					<div className="zuzu-testimonial-card">
						<h4>Awesome experience</h4>
						<p>
							Hey Pavin! Nice work on the website. 
							And We have also noticed that our traffic on the Facebook page has improved from 10k to over 40k per post. 
							It was wonderful working with you. Also, Thanks for fixing our CCTV's we appreciate your help.
						</p>
						<div className="zuzu-testimonial-author">
							<div className="zuzu-testimonial-author-wrap">
								<div className="zuzu-testimonial-author-thumb">
									<img
										src="
                                    /images/all-img/v1/laserenelogo.png"
										alt=""
									/>
								</div>
								<div className="zuzu-testimonial-author-data">
									<h5>LaSerene Resort Kericho</h5>
									<span>Manager @ LaSerene</span>
								</div>
							</div>
						</div>
					</div>
					<div className="zuzu-testimonial-card">
						<h4>Pleasure working with Pavin</h4>
						<p>
							It's been nice working with Pavin, He has done great work with our school management system landing page and has also taken the time to bring us more clients through referring us to others. It will be a pleasure working with him again.
						</p>
						<div className="zuzu-testimonial-author">
							<div className="zuzu-testimonial-author-wrap">
								<div className="zuzu-testimonial-author-thumb">
									<img
										src="
                                    /images/all-img/v1/pamatech.jpeg"
										alt=""
									/>
								</div>
								<div className="zuzu-testimonial-author-data">
									<h5>Pamatech Global Solutions</h5>
									<span>Director @ Pamatech Global Solutions</span>
								</div>
							</div>
						</div>
					</div>
					<div className="zuzu-testimonial-card">
						<h4>He delivers beyond your expectations</h4>
						<p>
							Pavin has proven to be a self driven and growth-oriented player of our team. He has delivered beyond our expectations. Working with him has been a pleasure and I'm looking forward to our next project with him
						</p>
						<div className="zuzu-testimonial-author">
							<div className="zuzu-testimonial-author-wrap">
								<div className="zuzu-testimonial-author-thumb">
									<img
										src="
                                    /images/all-img/v1/gptletters.webp"
										alt=""
									/>
								</div>
								<div className="zuzu-testimonial-author-data">
									<h5>GPTLetters</h5>
									<span>CEO @ GPTLetters </span>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}
