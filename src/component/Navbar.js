import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h1><Link to="/">PIYAWAN</Link></h1>
			<nav ref={navRef}>

				<Link to="/" onClick={showNavbar}>Home</Link>
				<Link to="/about" onClick={showNavbar}>About me</Link>
				<Link to="/education" onClick={showNavbar}>Education</Link>
				<Link to="/skills" onClick={showNavbar}>Skills</Link>
				<Link to="/contact" onClick={showNavbar}>Contact</Link>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
