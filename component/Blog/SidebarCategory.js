import Link from "next/link";

export default function SidebarCategory() {
	return (
		<div className="zuzu-blog-sidebar-item">
			<div className="zuzu-sidebar-item-title">
				<h6>Blog Categories</h6>
			</div>
			<div className="zuzu-categories">
				<ul>
					<li>
						<Link href={"#"}> Cryptocurrency (0)</Link>
					</li>
					<li>
						<Link href={"#"}> Digital Marketing (0)</Link>
					</li>
					<li>
						<Link href={"#"}> Blockchain (0)</Link>
					</li>
					<li>
						<Link href={"#"}> Content Creation (0)</Link>
					</li>
					<li>
						<Link href={"#"}> Gadgets (0)</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
