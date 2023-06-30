import Link from "next/link";

export default function Community() {
	return (
		<div className="zuzu-footer-menu">
			<span>Community</span>
			<ul>
				<li>
					<Link href={"#"}> Youtube</Link>
				</li>
				<li>
					<Link href={"#"}> Discord</Link>
				</li>
				<li>
					<Link href={"#"}> Telegram</Link>
				</li>
				<li>
					<Link href={"#"}> Twitter</Link>
				</li>
			</ul>
		</div>
	);
}
