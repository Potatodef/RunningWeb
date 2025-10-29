package com.example.runningweb.client;

import com.example.runningweb.model.WeatherResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(
        name="WeatherClient",
        url="https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast"
)
public interface WeatherClient {
    @GetMapping
    WeatherResponse createWeatherRequest(
            @RequestHeader("X-Api-key") String API_Key
    );
}