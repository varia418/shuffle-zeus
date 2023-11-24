import Image from "next/image";
import React from "react";

function NavBar() {
	return (
		<nav className="flex justify-between p-7">
			<Image
				src="https://shuffle.dev/zeus-assets/logo/logo-zeus-red.svg"
				width={70}
				height={70}
				alt="logo"
			/>
			<ul className="flex gap-5 mr-5 ml-auto items-center">
				<li>About</li>
				<li>Company</li>
				<li>Services</li>
				<li>Testimonials</li>
			</ul>
			<a className="rounded bg-red-100 text-red-500 font-medium py-2 px-3 hover:bg-red-200">
				Contact Us
			</a>
		</nav>
	);
}

export default NavBar;
