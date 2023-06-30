import Link from "next/link";

export default function Resources() {
	return (
		<div className="zuzu-footer-menu">
			<span>Resources</span>
			<ul>
				<li>
					<Link href={"#"}> Blog </Link>
				</li>
				<li>
					<Link href={"#"}> Store </Link>
				</li>
				<li>
					<Link href={"#"}> Academy </Link>
				</li>
				<li>
					<Link href={"#"}> Pricing </Link>
				</li>
			</ul>
		</div>
	);
}
