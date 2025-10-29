package com.example.runningweb.client;

import com.example.runningweb.model.GymResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(
        name="GymClient",
        url="https://activesg.gov.sg"
)
public interface GymClient {
    @GetMapping(value = "/api/trpc/pass.getFacilityCapacities",
            headers = {
                    "User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                    "Accept=*/*",
                    "Accept-Language=en-US,en;q=0.9",
                    "Referer=https://www.activesg.gov.sg/"
            })
    GymResponse createGymRequest();
}
