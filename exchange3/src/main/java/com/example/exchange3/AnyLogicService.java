package com.example.exchange3;

import com.xj.anylogic.engine.Engine;
import exchage.CustomExperiment;
import exchage.Main;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AnyLogicService {
        Map<String, Object> getMaterialAverage(AnyLogicInput anyLogicInput){
                Random rand = new Random(System.currentTimeMillis());
                CustomExperiment s = new exchage.CustomExperiment(null);
                Engine d = s.createEngine();
                d.setDefaultRandomGenerator(rand);
                Main m = new Main(d, null, null);
                m.setParametersToDefaultValues();
                m.setDefaultRandomGenerator(rand);
                d.start(m);
                d.setRealTimeMode(false);
                m.maxMaterialCount=anyLogicInput.getMaxMaterialCount();
                m.materialPerDay=anyLogicInput.getMaterialPerDay();
                m.listOfMaterials = anyLogicInput.getListOfMaterials();
                System.out.println(m.maxMaterialCount);
                System.out.print(m.materialPerDay);
                System.out.print(m.listOfMaterials);
                List<Double> listOfAverage = new ArrayList<>();
                Map<String, Object> res = new HashMap<>();
                System.out.println(" Дней: "+m.days);
                while (m.currentMaterial>=0) {
                        listOfAverage.add(m.averageMaterialUsage);

                    d.step();
                }

                res.put("days", (int) (m.maxMaterialCount/m.materialPerDay));
                res.put("points", new ArrayList<>(new LinkedHashSet<>(listOfAverage)));
                return res;
    }
}
