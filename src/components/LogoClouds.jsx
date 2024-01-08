import Image from "next/image";
import React from "react";

function LogoClouds() {
	return (
		<div className="container mx-auto py-20">
			<h3 className="text-3xl text-slate-400 my-7 text-center">
				Trusted by brand all over the world
			</h3>
			<div>
				<ul className="flex flex-wrap justify-between">
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-8 w-full rounded-xl flex justify-center items-center">
							<Image
								src="/logos/slack-gray.svg"
								width={100}
								height={45}
								className="h-8"
								alt="slack"
							/>
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-8 w-full rounded-xl flex justify-center items-center">
							<Image
								src="/logos/dropbox-gray.svg"
								width={100}
								height={45}
								className="h-8"
								alt="dropbox"
							/>
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-8 w-full rounded-xl flex justify-center items-center">
							<Image
								src="/logos/spotify-gray.svg"
								width={100}
								height={45}
								className="h-8"
								alt="spotify"
							/>
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-8 w-full rounded-xl flex justify-center items-center">
							<Image
								src="/logos/amazon-gray.svg"
								width={100}
								height={45}
								className="h-8"
								alt="amazon"
							/>
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-8 w-full rounded-xl flex justify-center items-center">
							<Image
								src="/logos/netflix-gray.svg"
								width={100}
								height={45}
								className="h-8"
								alt="netflix"
							/>
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-8 w-full rounded-xl flex justify-center items-center">
							<Image
								src="/logos/stripe.svg"
								width={100}
								height={45}
								className="h-8"
								alt="stripe"
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LogoClouds;
