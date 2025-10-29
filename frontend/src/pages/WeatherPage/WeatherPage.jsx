import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link } from 'react-router';
import './WeatherPage.css';

export function WeatherPage() {
	const [weatherData, setWeatherData] = useState([]);
	const [location, setLocation] = useState("");
	const [searchLocation, setSearchLocation] = useState("");

	const Mylocation = searchLocation;
	let forecast = useRef("");

	useEffect(() => {
		const getWeatherData = async () => {
			const response = await axios.get("http://localhost:8080/weather");
			await setWeatherData(response.data);
		}
		getWeatherData();
	}, [])

	if (weatherData?.data?.items[0]?.forecasts && searchLocation != "") {
		weatherData.data.items[0].forecasts.forEach((element) => {
			(element.area.toLowerCase() == Mylocation.toLowerCase()) && (forecast.current = element.forecast)
		})
	}
	const time = dayjs();
	const enterkey = (event) => {
		if (event.key === 'Enter') {
			setSearchLocation(location)
		}
	}

	return (
		<>
			<div className='weather-image-container'>
				{(forecast.current == "") 
				? <img 
				className='weather-image'
				src='https://media.tenor.com/oXE9lcCAK-wAAAAj/running-pixel-art.gif' 
				alt='pixelated running dood gif'></img> 
				:(forecast.current.includes("Showers") || forecast.current.includes("Rain")) 
				? <img 
				className='weather-image'
				src='https://64.media.tumblr.com/08680930d8348ecd845c99a4f5306605/tumblr_oq6e7dri9j1qf1qjho1_500.gif' 
				alt='Raining gif'></img> 
				: (forecast.current.includes("Hazy")) 
				? <img 
				className='weather-image'
				src='https://art.ngfiles.com/images/2548000/2548496_aleha84_evening-fog.gif?f1653918707' 
				alt='Hazy gif'></img> 
				: <img 
				className='weather-image'
				src='https://i.pinimg.com/originals/69/77/8b/69778bfed51b67aecf94f10d979b2bdc.gif' 
				alt='Clear sky gif'></img>}
				
			</div>

			<div className='input-container'>
				<input
					className='input'
					placeholder="Where do you want to run?"
					value={location}
					onChange={(event) => {
						setLocation(event.target.value);
					}
				}
					onKeyDown={enterkey}
				/>
				<div className="update-button" >
					<span 
				onClick={() => { setSearchLocation(location) }} >Update</span>
				</div>
			</div>

			<div className='forecast-container'>
				{(searchLocation == "")
					? <>You haven't searched yet...</>
					: (forecast.current == "")
						? <>loading...</>
						: (forecast.current.includes("Showers") || forecast.current.includes("Rain"))
							? <>As of {time.format('HH:mm:ss')} Weather forecast: {forecast.current}. <div> You should NOT run. Maybe you can go to the <Link to="/gym">gym</Link></div></>
							: (forecast.current.includes("Hazy"))
								? <>As of {time.format('HH:mm:ss')} Weather forecast: {forecast.current}. <div> You should probably not run.</div></>
								: <>As of {time.format('HH:mm:ss')} Weather forecast: {forecast.current}. <div> You should run.</div></>
				}
			</div>

		</>

	);
}