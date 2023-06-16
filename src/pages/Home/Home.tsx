import styles from "./home.module.scss";

// components

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
	return (
		<>
			<NavBar />
			<div className={styles.container}></div>
			<Footer />
		</>
	);
}
