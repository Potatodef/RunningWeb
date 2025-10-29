package com.example.runningweb.controller;

import com.example.runningweb.service.FitbitService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:5173")
@RestController
public class FitbitController {
    private final FitbitService fitbitService;

    public FitbitController(FitbitService fitbitService) {
        this.fitbitService = fitbitService;
    }

    @GetMapping("/fitbit")
    public String getFitbit(
            @RequestParam("authorization_code") String authorization_code,
            @RequestParam("code_verifier") String code_verifier) throws JsonProcessingException {
        return fitbitService.getFitbit(authorization_code, code_verifier);
    }
}
