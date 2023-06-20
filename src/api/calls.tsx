import axios from "axios";

export const getBored = () => {
	const data = axios.get("https://www.boredapi.com/api/activity/").then((response) => {
		return response.data;
	});
	return data;
};

export const getCountry = (name: string) => {
	const data = axios.get(`https://restcountries.com/v3.1/name/${name}`).then((response) => {
		return response.data;
	});
	return data;
};

export const getCountryByCode = (code: string | undefined) => {
	const data = axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then((response) => {
		return response.data;
	});
	return data;
};
