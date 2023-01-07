package com.example.materials;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AnylogicController {
    final AnyLogicService anyLogicService;
    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, Object> startAnyLogicModel(@RequestBody UserInput userInput){
        return anyLogicService.getMaterialAverageAndDaysLeft(userInput);
    }
}
