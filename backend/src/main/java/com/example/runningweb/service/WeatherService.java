package com.example.runningweb.service;

import com.example.runningweb.client.WeatherClient;
import com.example.runningweb.model.WeatherResponse;
import org.springframework.stereotype.Service;

@Service
public class WeatherService {
    private final WeatherClient weatherClient;

    public WeatherService(WeatherClient weatherClient) {
        this.weatherClient = weatherClient;
    }

    public WeatherResponse getWeather() {
        String apiKey = System.getenv("DATA_GOV_API_KEY");
        return weatherClient.createWeatherRequest(apiKey);
    }
}
