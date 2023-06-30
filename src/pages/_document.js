import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<link rel="icon" href="/images/logo/Logo.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Inter:wght@400;500;600;700&family=Public+Sans:wght@600;700;800&family=Space+Grotesk:wght@500;600;700&family=Syne:wght@600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="light">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
