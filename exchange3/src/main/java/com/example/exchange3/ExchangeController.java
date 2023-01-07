package com.example.exchange3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ExchangeController {
    @Autowired
    AnyLogicService anyLogicService;
    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, Object> getMaterialAverage(@RequestBody AnyLogicInput anyLogicInput){
        return anyLogicService.getMaterialAverage(anyLogicInput);
    }
}
