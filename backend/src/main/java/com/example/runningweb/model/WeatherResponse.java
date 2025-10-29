package com.example.runningweb.model;

import java.util.List;

public class WeatherResponse {
    public Data data;
    public Data getData() {
        return data;
    }
    public void setData(Data data) {
        this.data = data;
    }

    public static class Data {
        List<Item> items;
        public List<Item> getItems() {
            return items;
        }
        public void setItems(List<Item> items) {
            this.items = items;
        }
    }
    public static class Item {
        List<Forecast> forecasts;
        public List<Forecast> getForecasts() {
            return forecasts;
        }
        public void setForecasts(List<Forecast> forecasts) {
            this.forecasts = forecasts;
        }
    }
    public static class Forecast {
        String area;
        String forecast;
        public String getArea() {
            return area;
        }
        public void setArea(String area) {
            this.area = area;
        }
        public String getForecast() {
            return forecast;
        }
        public void setForecast(String forecast) {
            this.forecast= forecast;
        }
    }

}
