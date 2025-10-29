package com.example.runningweb.service;

import com.example.runningweb.client.FitbitClient;
import com.example.runningweb.model.FitbitResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class FitbitService {
    private final FitbitClient fitbitClient;
    private boolean alreadyCalled = false;

    public FitbitService(FitbitClient fitbitClient) {
        this.fitbitClient = fitbitClient;
    }

    private FitbitResponse token;


    public String getFitbit(String code, String code_verifier) throws JsonProcessingException{
        Map<String, String> form = new HashMap<>();
        form.put("client_id","23TGTJ");
        form.put("grant_type","authorization_code");
        form.put("code",code);
        form.put("code_verifier",code_verifier);

        token = fitbitClient.createFitbitRequest(form); // get token where .getAccess_token gives token

        Map<String, Object> fitbitActivity = getFitbitActivity();
        return AIresponse(fitbitActivity);

    }

    public Map<String, Object> getFitbitActivity() {
        String auth_token = "Bearer " + token.getAccess_token();

        return fitbitClient.createFitbitActivity(auth_token);
    }

    public String AIresponse(Map<String, Object> prompt) throws JsonProcessingException {
        if (alreadyCalled) {
            return "called the api already...";
        }
        ObjectMapper mapper = new ObjectMapper();
        String activityPrompt = mapper.writeValueAsString(prompt);
        Client client = new Client();
        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-2.5-flash",
                        "Act as a running coach giving advice on the following json stats"+activityPrompt,
                        null);
        alreadyCalled = true;
        return response.text();
    }
}
