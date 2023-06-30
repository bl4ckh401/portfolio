import Layout from "../../component/layout";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// slick
import "slick-carousel/slick/slick.css";
import "../../styles/css/slick.css";
// modal
import "react-modal-video/css/modal-video.min.css";

// main css
import "../../styles/css/main.css";
import "../../styles/css/app.min.css";

import Head from "next/head";
import ScrollTop from "../../component/common/ScrollTop";
import Preloader from "../../component/common/Preloader";

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Pavin Kiptoo | Pav Programs | Blockchain Dev</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>

			<ScrollTop />
			<Preloader />
		</>
	);
}

export default App;
