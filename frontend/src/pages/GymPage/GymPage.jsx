import axios from 'axios';
import { useState, useEffect } from 'react';
import './GymPage.css'

export function GymPage() {
	const [gymData, setGymData] = useState(0); // gymdata is the percentage capacity of the gym
	const [location, setLocation] = useState("");
	const [searchLocation, setSearchLocation] = useState("");

	useEffect(() => {
		if (searchLocation) {
			const getGymData = async () => {
			const response = await axios.get(`http://localhost:8080/gym?location=${searchLocation}`);
			setGymData(response);
		};
		getGymData();
		}
		
	}, [searchLocation])
	const enterkey = (event) => {
		if (event.key === 'Enter') {
			setSearchLocation(location)
		}
	}

	return (
		<>
			<div className='image-container'>
				<img 
				className='gym-image'
				src='https://64.media.tumblr.com/aacce3128706c8dc0c36160400ab6662/tumblr_ollkjp5wRW1s8d1m3o1_400.gif' 
				alt='bald dood gymming gif'
				/>
			</div>

			<div className='input-container'>
				<input
					className='input'
					placeholder="Type ActiveSG Gym Location"
					value={location}
					onChange={(event) => {
						setLocation(event.target.value)
					}}
					onKeyDown={enterkey} />
				<span 
				className='update-button' 
				onClick={() => { setSearchLocation(location); console.log(location); }}>Update</span>
			</div>

			<div>
				{(!searchLocation) 
				? <>You haven't search yet.</>
				: (gymData?.data?.capacity === 0) 
				? <>Gym Capacity: {gymData.data.capacity}%</> 
				: (gymData?.data?.capacity) 
				? <>Gym Capacity: {gymData.data.capacity}%</>
				: <>loading...</>}
			</div>

			<div className='result-container'>
					{(gymData?.data?.capacity ===0) 
					? <>Hmmm, might be closed, check it out first</> 
					: (gymData?.data?.capacity >= 60) 
					? <>Looks a little full.</> 
					: (gymData?.data?.capacity <= 30) 
					? <>Looks empty, you should hurry!</> 
					: <>You can go to the gym if you want.</>}
			</div>
		</>
	);
}