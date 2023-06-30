import CountUp from "react-countup";

export default function CounterOne({ light }) {
	return (
		<div className={`${light ? "section zuzu-counter-light" : "zuzu-counter-section bg-gray-500"}`}>
			<div id="zuzu-counter" />
			<div className="container">
				<div className="zuzu-counter-wrap">
					<div className="zuzu-counter-data wow fadeInUpX" data-wow-delay="0s">
						<h2>
							<span className="zuzu-counter">
								<CountUp start={0} end={214} />
							</span>
							{/* <strong>K</strong> */}
						</h2>
						<p>Subscribers</p>
					</div>
					<div className="zuzu-counter-data wow fadeInUpX" data-wow-delay="0.10s">
						<h2>
							<span className="zuzu-counter">
								<CountUp start={0} end={8500} />
							</span>
							{/* <strong>B+</strong> */}
						</h2>
						<p>Views</p>
					</div>
					<div className="zuzu-counter-data wow fadeInUpX" data-wow-delay="0.20s">
						<h2>
							<span className="zuzu-counter">
								<CountUp end={4} />
							</span>
							<strong>+</strong>
						</h2>
						<p>Countries are reached</p>
					</div>
				</div>
			</div>
		</div>
	);
}
