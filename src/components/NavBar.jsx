import Image from "next/image";
import React from "react";

function NavBar() {
	return (
		<>
			<nav className="flex justify-between p-7">
				<Image
					src="https://shuffle.dev/zeus-assets/logo/logo-zeus-red.svg"
					width={70}
					height={70}
					alt="logo"
				/>

				<ul className="hidden md:flex gap-5 mr-5 ml-auto items-center">
					<li>About</li>
					<li>Company</li>
					<li>Services</li>
					<li>Testimonials</li>
				</ul>

				<a className="hidden md:block rounded bg-red-100 text-red-500 font-medium py-2 px-3 hover:bg-red-200">
					Contact Us
				</a>

				<button className="md:hidden">
					<svg
						class="block h-4 w-4"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						data-config-id="auto-svg-1-2"
					>
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</nav>
			<nav></nav>
		</>
	);
}

export default NavBar;
