import Head from "next/head";
import SidebarCategory from "../../component/Blog/SidebarCategory";
import SidebarRecentPost from "../../component/Blog/SidebarRecentPost";
import SidebarSearch from "../../component/Blog/SidebarSearch";
import SidebarSubscriber from "../../component/Blog/SidebarSubscriber";
import SidebarTag from "../../component/Blog/SidebarTag";
import SingleBlogDetailsLight from "../../component/Blog/SingleBlog/SingleBlogDetailsLight";
import Breadcrumb from "../../component/common/Breadcrumb";
import Link from "next/link";

export default function SingleDarkBlog() {
	return (
		<>
			<Head>
				<title>Zuzu - Single Dark Blog</title>
			</Head>
			<Breadcrumb dark title="Diesel unveiling" />

			<div className="section zuzu-section-padding dark-version bg-gray-500">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<SingleBlogDetailsLight />
						</div>
						<div className="col-lg-4">
							<div className="zuzu-blog-sidebar">
								<SidebarSearch />
								<SidebarCategory />
								<SidebarRecentPost />
								<SidebarTag />
								<SidebarSubscriber />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
