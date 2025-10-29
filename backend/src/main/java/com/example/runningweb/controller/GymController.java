package com.example.runningweb.controller;

import com.example.runningweb.model.GymFilteredResponse;
import com.example.runningweb.model.GymResponse;
import com.example.runningweb.service.GymService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:5173")
@RestController
public class GymController {
    private final GymService gymService;

    public GymController(GymService gymService) {
        this.gymService = gymService;
    }

    @GetMapping("/gym")
    public GymFilteredResponse getGym(@RequestParam String location) {
        return gymService.getGym(location);
    }
}
