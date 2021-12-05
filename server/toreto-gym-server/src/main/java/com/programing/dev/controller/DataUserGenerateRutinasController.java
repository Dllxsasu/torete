package com.programing.dev.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.programing.dev.model.DataUserGenerateRutinas;

import weka.classifiers.bayes.NaiveBayes;
import weka.core.DenseInstance;
import weka.core.Instances;
import weka.core.converters.ConverterUtils;

@RestController
//El maping
@RequestMapping("/api/rutinas")
public class DataUserGenerateRutinasController {

	  //el Uri
    @PostMapping("generador")	 //el requesBody valida que este completo y el @valida que este bien xd
    
    public String rutina(@RequestBody  DataUserGenerateRutinas data) {
    	DenseInstance dataUser = new DenseInstance(3, new double[] {
				data.getGenero(),
				data.getNivel(),
				data.getObjetivo(),
				data.getDisponibilidad_dias()
		});
    	//locos(dataUser);
    	return locos(dataUser);
    }
    
    public static String locos(DenseInstance data) {
		try {
			
			
			ConverterUtils.DataSource source1 = new ConverterUtils.DataSource("src/main/resources/data/datita.arff");
			Instances train = source1.getDataSet();
			// setting class attribute if the data format does not provide this information
			// For example, the XRFF format saves the class attribute information as well

			// For example, the XRFF format saves the class attribute information as well

			train.setClassIndex(train.numAttributes() - 1);

			ConverterUtils.DataSource source2 = new ConverterUtils.DataSource(
					"src/main/resources/data/dataprueba.arff");
			//Instances test = source2.getDataSet();
			data.setDataset(train);
			DenseInstance test = data;
			// setting class attribute if the data format does not provide this information
			// For example, the XRFF format saves the class attribute information as well

		//	test.setClassIndex(train.numAttributes() - 1);

			// model

			NaiveBayes naiveBayes = new NaiveBayes();
			naiveBayes.buildClassifier(train);
			System.out.println("data test:  " + test.toString());
			// this does the trick
			double label = naiveBayes.classifyInstance(test);
			System.out.println(" el  en la fila: label:asdasdas ");
			train.instance(0).setClassValue(label);

			System.out.println(" el valor en la fila: label: " + label);
			
			System.out.println("La salida: " +train.instance(0).stringValue(4));
			
			return (train.instance(0).stringValue(4));
		} catch (Exception e) {
			System.out.println("error alg " + e.getMessage());
			return "";
		}
	}
}
