import { useState, useEffect } from "react";

import styles from "./home.module.scss";

// components

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// api calls

import { getBored } from "../../api/calls";
import { getCountry } from "../../api/calls";

export default function Home() {
	const [boredData, setBoredData] = useState({});
	const [countryData, setCountryData] = useState({});
	const [countryName, setCountryName] = useState<string>("");

	useEffect(() => {
		getBored().then((result) => {
			setBoredData(result);
		});
	}, []);

	useEffect(() => {
		getCountry(countryName).then((result) => {
			setCountryData(result);
		});
	}, [countryName]);

	function debounce(fn: any, delay: number) {
		let timerId: number;

		return function (...args: any) {
			if (timerId) {
				clearTimeout(timerId);
			}

			timerId = setTimeout(() => {
				fn(...args);
			}, delay);
		};
	}

	const delayedFuncion = debounce(handleCountrySearch, 500);

	function handleCountrySearch(text: string) {
		setCountryName(text);
	}

	console.log("boredData", boredData);
	console.log("countryData", countryData);

	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<input type="text" onChange={(e) => delayedFuncion(e.target.value)} />
			</div>
			<Footer />
		</>
	);
}
