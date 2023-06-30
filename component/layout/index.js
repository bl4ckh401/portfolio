import FooterHomeOne from "./Footer/footerHomeOne";
import HeaderHomeOne from "./Header/HeaderHomeOne";


export default function Layout({ children }) {
	return (
		<>
			<HeaderHomeOne/>
			<main>{children}</main>
			<FooterHomeOne/>
		</>
	);
}
