import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Introduction />
			<Resume />
			<Footer />
		</div>
	);
}

export default App;
