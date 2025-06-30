package com.example.WeatherApplication.controller;

import com.example.WeatherApplication.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/weather")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;
            @GetMapping("/{city}")
    public String getWeather(@PathVariable String city)
            {
                return weatherService.getWeather(city);
            }
}
