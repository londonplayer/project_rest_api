import { useState, useEffect } from "react";
import styles from "./home.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getBored } from "../../api/calls";
import { getCountry } from "../../api/calls";
import { useNavigate } from "react-router-dom";

interface CountryType {
	name: {
		common: string;
	};
	cca2: string;
}

export default function Home() {
	const [boredData, setBoredData] = useState({});
	const [countryData, setCountryData] = useState<null | CountryType[]>(null);
	const [countryName, setCountryName] = useState<string>("");

	const hitory = useNavigate();

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
				<div className={styles.header}>
					<span>Select a country</span>
					<input type="text" onChange={(e) => delayedFuncion(e.target.value)} />
				</div>
				<div className={styles.dropdown}>
					{countryData?.map((item) => {
						return (
							<div
								key={item.name.common}
								className={styles.country}
								onClick={() => hitory(`/country/${item.cca2}`)}
							>
								{countryName === "" ? "" : item.name.common}
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</>
	);
}
