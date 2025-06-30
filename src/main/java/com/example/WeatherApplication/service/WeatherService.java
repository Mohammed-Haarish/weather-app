package com.example.WeatherApplication.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;


@Service
public class WeatherService {

    private final String API_KEY = "029013d188e30d9e2a282e381d2f2818";
    private final WebClient.Builder webClientBuilder;

    public WeatherService(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }

    public String getWeather(String city) {
        String url = "https://api.openweathermap.org/data/2.5/weather?q=" +
                city + "&appid=" + API_KEY + "&units=metric";

        try {
            return webClientBuilder.build()
                    .get()
                    .uri(url)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
        } catch (Exception e) {
            return "{\"error\":\"Unable to fetch weather\"}";
        }
    }
}
