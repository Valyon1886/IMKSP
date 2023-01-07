package com.example.materials;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserInput {
    Integer maxMaterialCount;
    Integer materialPerDay;
    Integer days;
    List<String> listOfMaterials;
}
