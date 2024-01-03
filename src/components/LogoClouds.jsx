import React from "react";

function LogoClouds() {
	return (
		<div className="py-20">
			<h3 className="text-3xl text-slate-400 my-7 text-center">
				Trusted by brand all over the world
			</h3>
			<div>
				<ul className="flex justify-center gap-10">
					<li>
						<div>
							<img src="/logos/slack-gray.svg" alt="slack" />
						</div>
					</li>
					<li>
						<div>
							<img src="/logos/dropbox-gray.svg" alt="dropbox" />
						</div>
					</li>
					<li>
						<div>
							<img src="/logos/spotify-gray.svg" alt="spotify" />
						</div>
					</li>
					<li>
						<div>
							<img src="/logos/amazon-gray.svg" alt="amazon" />
						</div>
					</li>
					<li>
						<div>
							<img src="/logos/netflix-gray.svg" alt="netflix" />
						</div>
					</li>
					<li>
						<div>
							<img src="/logos/stripe.svg" alt="stripe" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LogoClouds;
