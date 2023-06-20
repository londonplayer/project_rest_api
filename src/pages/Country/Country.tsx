import { useParams } from "react-router-dom";
import { getCountryByCode } from "../../api/calls";
import { useEffect, useState } from "react";

interface CountryType {
	name: {
		common: string;
	};
}

export default function Country() {
	const { id } = useParams();
	const [country, setCountry] = useState<CountryType | null>(null);

	useEffect(() => {
		getCountryByCode(id).then((result) => {
			setCountry(result[0]);
		});
	}, [id]);

	console.log(country);

	return <div>{country?.name?.common}</div>;
}
