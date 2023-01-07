package com.example.materials;

import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
@RequiredArgsConstructor
class MaterialUsageApplicationTests {
    @Mock
    AnyLogicService anyLogicService;
    UserInput userInput;
    @BeforeEach
    void initModel() {
        anyLogicService = new AnyLogicService();
        userInput = new UserInput(1000, 5, 0, List.of("Клей"));
        anyLogicService.initModel(userInput);
    }

    @Test
    void checkDaysLeft() {
        assertEquals(200, anyLogicService.getMaterialAverageAndDaysLeft(userInput).get("days"));
    }

    @Test
    void checkGraph() {
        assertNotNull(anyLogicService.getMaterialAverageAndDaysLeft(userInput).get("points"));
    }

}
