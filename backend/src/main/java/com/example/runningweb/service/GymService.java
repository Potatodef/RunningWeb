package com.example.runningweb.service;

import com.example.runningweb.client.GymClient;
import com.example.runningweb.model.GymFilteredResponse;
import org.springframework.stereotype.Service;

@Service
public class GymService {
    private final GymClient gymClient;

    public GymService(GymClient gymClient) {
        this.gymClient = gymClient;
    }

    public GymFilteredResponse getGym(String location) {
        var gymResponse = gymClient.createGymRequest();
        GymFilteredResponse gymFilteredResponse = new GymFilteredResponse();
       //  gymResponse.getResult().getData().getJson().getGymFacilities() is a list of gymfacils class
        for (var gymFacility : gymResponse.getResult().getData().getJson().getGymFacilities()) {
            if ((gymFacility.getName().toLowerCase()).contains(location.toLowerCase())) {
                gymFilteredResponse.setCapacity(gymFacility.getCapacityInfo());
           }
        }
        return gymFilteredResponse;
    }
}
