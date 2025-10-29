import { generateCodeChallenge } from "./generateCodeChallenge";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './FitbitPage.css'

export function FitbitPage() {
	const [codeVerifier, setCodeVerifier] = useState();
	const [codeChallenge, setCodeChallenge] = useState();
	const [authCode, setAuthCode] = useState();
	const [fitbitData, setFitbitData] = useState();
	const [hasFetched, setHasFetched] = useState(false);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		setAuthCode(params.get("code")); 
		let CodeVerifier = localStorage.getItem("codeVerifier");

		if (!CodeVerifier) {
			CodeVerifier = (crypto.randomUUID() + crypto.randomUUID()).replaceAll("-", "");
			localStorage.setItem("codeVerifier", CodeVerifier);
		}
		setCodeVerifier(CodeVerifier);
		const getCodeChallenge = async () => {
			let CodeChallenge = await generateCodeChallenge(CodeVerifier);
			setCodeChallenge(CodeChallenge);
		}
		getCodeChallenge();
	}, []);

	useEffect(() => {
		if (authCode && !hasFetched && codeVerifier) {
			setHasFetched(true);
			const getFitbitData = async () => {
				const response = await axios.get(`http://localhost:8080/fitbit?authorization_code=${authCode}&code_verifier=${codeVerifier}`);
				localStorage.removeItem("codeVerifier");
				setFitbitData(response.data);
			}
			getFitbitData();
		}
	}, [authCode, codeVerifier, hasFetched]);
	return (
		<>
			<div className="connect-container">
				{(codeChallenge && !fitbitData && !authCode)
					? <>
						<div className="connect-text">
							Connect your Fitbit by clicking the logo and let AI analyse your past activities
						</div>
						<div className='connect-logo'>
							<a href={`https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=23TGTJ&scope=activity+cardio_fitness+electrocardiogram+heartrate+irregular_rhythm_notifications+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&code_challenge=${codeChallenge}&code_challenge_method=S256&state=poop`}>
								<img
									className="fitbit-logo"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCT7hq-kAh4yr7UF9B1ZpNhlbTJ9lhl2ROg&s"
									alt="fitbit logo"></img>
							</a>
						</div>
					</>
					: (authCode && !fitbitData) 
					? <>Still fetching response</>
					: <>
						<div>AI running coach says:</div>
						<div className="response-container">
							{fitbitData} 
						</div>
					</>
				}
			</div>
		</>
	);
}