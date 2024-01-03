import React from "react";

function Header() {
	return (
		<div className="max-w-screen-lg mx-auto text-center py-20">
			<p className="text-lg text-sky-400 font-semibold mb-7">
				What&apos;s new at Shuffle
			</p>
			<h1 className="text-7xl font-bold text-sky-900 my-10">
				Take care of your performance everyday.
			</h1>
			<p className="text-2xl text-slate-400 my-7">
				Build a well-presented brand that everyone will love. Take care
				to develop resources continually and integrity them with
				previous projects.
			</p>
			<button className="bg-red-500 rounded p-4 text-white hover:bg-red-400 my-7">
				Track your performance
			</button>
		</div>
	);
}

export default Header;
