package com.example.runningweb.model;

import java.util.List;

public class GymResponse {
    private Result result;
    public Result getResult() {
        return result;
    }
    public void setResult(Result result) {
        this.result = result;
    }

    public static class Result {
        private Data data;
        public Data getData() {
            return data;
        }
        public void setData(Data data) {
            this.data = data;
        }
    }

    public static class Data {
        private Json json;
        public Json getJson() {
            return json;
        }
        public void setJson(Json json) {
            this.json = json;
        }
    }

    public static class Json {
        private double timestamp;
        private List<GymFacility> gymFacilities;
        public double getTimestamp() {
            return timestamp;
        }
        public void setTimestamp(double timestamp) {
            this.timestamp = timestamp;
        }

        public List<GymFacility> getGymFacilities() {
            return gymFacilities;
        }
        public void setGymFacilities(List<GymFacility> gymFacilities) {
            this.gymFacilities = gymFacilities;
        }
    }

    public static class GymFacility {
        private String name;
        private int capacityInfo;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }

        public int getCapacityInfo() {
            return capacityInfo;
        }
        public void setCapacityInfo(int capacityInfo) {
            this.capacityInfo = capacityInfo;
        }
    }
}
