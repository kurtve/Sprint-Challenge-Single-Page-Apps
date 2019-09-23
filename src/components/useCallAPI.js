
import { useEffect } from 'react';
import axios from "axios";


export default function(apiURL, setter) {

	useEffect(() => {

		axios
			.get(apiURL)
			.then(res => {
				setter(res.data.results);
				console.log(res.data.results);
			})
			.catch(err => console.log(err));

	}, [apiURL, setter]);

}
