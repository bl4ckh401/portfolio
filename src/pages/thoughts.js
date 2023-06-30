import Head from "next/head";
import BlogPagination from "../../component/Blog/BlogPagination";
import SidebarCategory from "../../component/Blog/SidebarCategory";
// import SidebarRecentPost from "../../component/Blog/SidebarRecentPost";
import SidebarSearch from "../../component/Blog/SidebarSearch";
import SidebarTag from "../../component/Blog/SidebarTag";
import SingleBlog from "../../component/Blog/SingleBlog";
import Breadcrumb from "../../component/common/Breadcrumb";
import { BlogPostData } from "../../component/Blog/BlogPostData";

export default function Blog() {
	return (
		<>
			<Head>
				<title>Blog | Pav Programs | Blockchain Dev</title>
			</Head>

			<Breadcrumb dark title="Thoughts" />
			<div className="section zuzu-section-padding dark-version bg-gray-500">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{BlogPostData.map((singleBlog) => (
								<SingleBlog singleBlog={singleBlog} />
							))}
							<BlogPagination />
						</div>
						<div className="col-lg-4">
							<div className="zuzu-blog-sidebar">
								<SidebarSearch />
								<SidebarCategory />
								{/* <SidebarRecentPost /> */}
								<SidebarTag />
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
