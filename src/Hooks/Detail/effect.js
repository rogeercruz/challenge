import { useState, useEffect } from "react";
import axios from 'axios';

export const useEndpoint = (req) => {
    const urlCode = location.href;
    const slug = urlCode.split('?name=');
    const name = slug[1];
    
    const [res, setRes] = useState({
		data: [],
		complete: false,
		pending: false,
		error: false
	});

    req.url = req.url + name
    
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
	return res.data[0];
}

