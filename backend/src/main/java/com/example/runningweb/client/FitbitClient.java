package com.example.runningweb.client;

import com.example.runningweb.model.FitbitResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;


import java.util.Map;

@FeignClient(
        name="FitbitClient",
        url="https://api.fitbit.com")
public interface FitbitClient {
    @PostMapping(value="/oauth2/token",
            headers = {
            "Authorization=Basic MjNUR1RKOmVhODliYmYzYjc0MDllOTg3MWU4ZTk3YzIyMDU5ZDA3",
            "Content-Type=application/x-www-form-urlencoded"
            })
    FitbitResponse createFitbitRequest(
            @RequestBody Map<String, String> form
    );

    @GetMapping(value = "/1/user/-/activities/list.json?sort=asc&afterDate=2025-10-01&limit=2&offset=0")
    Map<String,Object> createFitbitActivity(
            @RequestHeader("Authorization") String auth_token
    );

}
