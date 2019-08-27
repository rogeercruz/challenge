import { useState, useEffect } from "react";
import axios from 'axios';

export const useEndpoint = (req) => {
	const [res, setRes] = useState({
		data: [],
		complete: false,
		pending: false,
		error: false
	});

	useEffect(
		() => {
		setRes({
			data: [],
			pending: true,
			error: false,
			complete: false
		});
		axios(req)
			.then(res =>
			setRes({
				data: res.data,
				pending: false,
				error: false,
				complete: true
			})
			)
			.catch(() =>
			setRes({
				data: [],
				pending: false,
				error: true,
				complete: true
			})
			);
		},
		[req.url]
	);
	return res;
}

