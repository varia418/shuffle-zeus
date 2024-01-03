import React from "react";

function LogoClouds() {
	return (
		<div className="max-w-screen-lg mx-auto py-20">
			<h3 className="text-3xl text-slate-400 my-7 text-center">
				Trusted by brand all over the world
			</h3>
			<div>
				<ul className="flex flex-wrap justify-between">
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-4 w-full rounded-xl flex justify-center items-center">
							<img src="/logos/slack-gray.svg" alt="slack" />
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-4 w-full rounded-xl flex justify-center items-center">
							<img src="/logos/dropbox-gray.svg" alt="dropbox" />
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-4 w-full rounded-xl flex justify-center items-center">
							<img src="/logos/spotify-gray.svg" alt="spotify" />
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-4 w-full rounded-xl flex justify-center items-center">
							<img src="/logos/amazon-gray.svg" alt="amazon" />
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-4 w-full rounded-xl flex justify-center items-center">
							<img src="/logos/netflix-gray.svg" alt="netflix" />
						</div>
					</li>
					<li className="lg:w-1/6 md:w-1/3 w-full px-3">
						<div className="bg-gray-100 py-4 w-full rounded-xl flex justify-center items-center">
							<img src="/logos/stripe.svg" alt="stripe" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LogoClouds;
