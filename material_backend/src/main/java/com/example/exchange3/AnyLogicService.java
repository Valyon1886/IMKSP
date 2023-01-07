package com.example.exchange3;

import com.xj.anylogic.engine.Engine;
import exchage.CustomExperiment;
import exchage.Main;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AnyLogicService {

    Engine engine;
    Main main;

    void initModel(UserInput userInput) {
        Random rand = new Random(System.currentTimeMillis());
        CustomExperiment s = new exchage.CustomExperiment(null);
        engine = s.createEngine();
        engine.setDefaultRandomGenerator(rand);
        main = new Main(engine, null, null);
        main.setParametersToDefaultValues();
        main.setDefaultRandomGenerator(rand);
        engine.start(main);
        engine.setRealTimeMode(false);

        main.maxMaterialCount= userInput.getMaxMaterialCount();
        main.materialPerDay= userInput.getMaterialPerDay();
        main.listOfMaterials = userInput.getListOfMaterials();
    }

    Map<String, Object> getMaterialAverageAndDaysLeft(UserInput userInput) {
        this.initModel(userInput);

        List<Double> listOfAverage = new ArrayList<>();
        System.out.println(" Дней: " + main.days);
        while (main.currentMaterial >= 0) {
            listOfAverage.add(main.averageMaterialUsage);
            engine.step();
        }
        Map<String, Object> res = new HashMap<>();
        res.put("days", (int) (main.maxMaterialCount / main.materialPerDay));
        res.put("points", new ArrayList<>(new LinkedHashSet<>(listOfAverage)));
        return res;
    }
}
