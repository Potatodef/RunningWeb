//import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage/HomePage';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { GymPage } from './pages/GymPage/GymPage';
import { FitbitPage } from './pages/FitbitPage/FitbitPage';


function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="weather" element={<WeatherPage />} />
      <Route path="gym" element={<GymPage />} />
      <Route path="fitbit" element={<FitbitPage />} />
    </Routes>
  )
}

export default App
