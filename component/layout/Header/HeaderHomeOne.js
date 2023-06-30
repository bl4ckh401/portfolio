import Link from "next/link";
import useScroll from "../../Hooks/useScroll";
import { useState } from "react";
import Navbar from "../Navbar/navbar";
import NavItem from "../Navbar/nav-item";
import { BlogDropdownMenus, ContactDropdownMenus, DemoDropdownMenus, PagesDropdownMenus } from "../Navbar/menu-data";
import Logo from "./Component/Logo";

export default function HeaderHomeOne() {
	const scroll = useScroll();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
		console.log("test");
	};
	return (
		<header
			className={`site-header zuzu-header-dark zuzu-header-section ${scroll ? "sticky-menu" : ""}`}
			id="sticky-menu"
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					{/* Brand Logo*/}
					<div className="brand-logo zuzu-menu-left">
						<Logo logo_name={"Logo.png"} />
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
							onClick={handleCloseMobileMenu}
						/>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								<NavItem navItemText="Home" />
								{/* <NavItem navItemText="Services" /> */}
								<NavItem navItemText="About" />
								{/* <NavItem navItemText="Shop" /> */}
								<NavItem navItemText="Thoughts" />
								<NavItem navItemText="Contact" />
							</Navbar>
						</nav>
					</div>

					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<Link href={"contact"} legacyBehavior>
							<a className="zuzu-btn zuzu-header-btn rounded-pill black">Get Started</a>
						</Link>
					</div>
					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span />
					</div>
				</nav>
			</div>
		</header>
	);
}
