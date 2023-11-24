import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Numbers from "../components/Numbers";
import Features from "../components/Features";
import LogoClouds from "../components/LogoClouds";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<NavBar />
			<Header />
			<LogoClouds />
			<Features />
			<Numbers />
			<Footer />
		</>
	);
}
