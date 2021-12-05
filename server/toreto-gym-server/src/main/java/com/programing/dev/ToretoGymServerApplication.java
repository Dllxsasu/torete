package com.programing.dev;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.xml.crypto.Data;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.esotericsoftware.kryo.Kryo;
import com.esotericsoftware.kryo.io.Input;
import com.esotericsoftware.kryo.io.Output;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import com.programing.dev.model.alg_training;

import weka.classifiers.Evaluation;
import weka.classifiers.bayes.NaiveBayes;
import weka.core.DenseInstance;
import weka.core.Instances;
import weka.core.converters.ArffSaver;
import weka.core.converters.CSVLoader;
import weka.core.converters.ConverterUtils;

@SpringBootApplication
public class ToretoGymServerApplication {

	public static void main(String[] args) {
		// System.out.print("lasllasld");
		locos();
		SpringApplication.run(ToretoGymServerApplication.class, args);
		//guarde();
	}
	
	static void guarde() {
		try {
			// se crea el objecto
		Kryo kryo = new Kryo();
		//se registra con la clase que va a ser instanciada
	      kryo.register(SomeClass.class);
	      //se crea la clase a usar
	      SomeClass object = new SomeClass();
	      object.value = "Hello Kryo!";
	      //Se crea la variable y donde esta va a ser almacenada
	      Output output = new Output(new FileOutputStream("src/main/resources/data/file.bin"));
	      kryo.writeObject(output, object);
	      output.close();

	      Input input = new Input(new FileInputStream("src/main/resources/data/file.bin"));
	      SomeClass object2 = kryo.readObject(input, SomeClass.class);
	      input.close(); 
	      System.out.println("la cosa es asi: "+object2.value);
		}catch(Exception e) {
			System.out.println("la vida es asi: " + e.getMessage());
		}
	}
	
	static public class SomeClass {
	      String value;
	   }
	

	void locura() {

		try {
			
			Kryo kryo = new Kryo();
			kryo.register(NaiveBayes.class);
			
			
			// Create naivebayes classifier //
			NaiveBayes naivebayes = new NaiveBayes();

			// Dataset path //
			String dataSetRutina = "/datita.csv";

			// Create bufferedreader to read the dataset //
			BufferedReader bufferedReader = new BufferedReader(new FileReader(dataSetRutina));

			CSVLoader loader = new CSVLoader();
			loader.setSource(new File("src/main/resources/data/datita.csv"));
			System.out.println("la dates;: " + loader.getBufferSize());
			Instances data = loader.getDataSet();

			File fileArrf = new File("src/main/resources/data/datita.arff");

			ArffSaver saver = new ArffSaver();
			saver.setInstances(data);
			saver.setFile(fileArrf);
			saver.writeBatch();

			// Create dataset instances //
			Instances datasetInstances = new Instances(bufferedReader);

			// Randomize the dataset //
			datasetInstances.randomize(new java.util.Random(0));

			// Divide dataset into training and test data //
			int trainingDataSize = (int) Math.round(datasetInstances.numInstances() * 0.66);
			int testDataSize = (int) datasetInstances.numInstances() - trainingDataSize;

			// Create training data //
			Instances trainingInstances = new Instances(datasetInstances, 0, trainingDataSize);
			// Create test data //
			Instances testInstances = new Instances(datasetInstances, trainingDataSize, testDataSize);

			// Set Target class //
			trainingInstances.setClassIndex(trainingInstances.numAttributes() - 1);
			testInstances.setClassIndex(testInstances.numAttributes() - 1);

			// Close BufferedReader //
			bufferedReader.close();

			// Build Classifier //
			naivebayes.buildClassifier(trainingInstances);

			// Evaluation //
			Evaluation evaluation = new Evaluation(trainingInstances);
			evaluation.evaluateModel(naivebayes, testInstances);
			System.out.println(evaluation.toSummaryString("\nResults", false));
		} catch (Exception e) {
			System.out.println("Error Occured!!!! \n" + e.getMessage());
		}

	}

	public static void locos() {
		try {
						
			DenseInstance dataUser = new DenseInstance(4, new double[] {
					0,
					1,
					1,
					4
			});
			System.out.println("el numero de adtao que existe: " +  dataUser.numValues() );

			
			
			ConverterUtils.DataSource source1 = new ConverterUtils.DataSource("src/main/resources/data/datita.arff");
		
			Instances train = source1.getDataSet();
			
			DenseInstance testi = new DenseInstance(5, new double[] {
					0,
					1,
					1,
					4
			});
			// setting class attribute if the data format does not provide this information
			// For example, the XRFF format saves the class attribute information as well

			train.setClassIndex(train.numAttributes() - 1);

			ConverterUtils.DataSource source2 = new ConverterUtils.DataSource(
					"src/main/resources/data/dataprueba.arff");
			//Instances test = source2.getDataSet();
			testi.setDataset(train);
			DenseInstance test = testi;
			// setting class attribute if the data format does not provide this information
			// For example, the XRFF format saves the class attribute information as well

		//	test.setClassIndex(train.numAttributes() - 1);

			// model

			NaiveBayes naiveBayes = new NaiveBayes();
			naiveBayes.buildClassifier(train);
		//	alg_training alg = new alg_training();
			
			
		//	alg.naiveBayes = naiveBayes;
			Kryo kryo = new Kryo();
			kryo.setRegistrationRequired(false);
			kryo.setWarnUnregisteredClasses(true);
			kryo.register(weka.classifiers.bayes.NaiveBayes.class);
			
			 Output output = new Output(new FileOutputStream("src/main/resources/data/file.bin"));
		      kryo.writeObject(output, naiveBayes);
		      output.close();
			
			
			
			System.out.println("data test:  " + test.toString());
			// this does the trick
			double label = naiveBayes.classifyInstance(test);
			System.out.println(" el  en la fila: label:asdasdas ");
			train.instance(0).setClassValue(label);

			System.out.println(" el valor en la fila: label: " + label);
			System.out.println("La salida: " +train.instance(0).stringValue(4));
			
			
			
			 Input input = new Input(new FileInputStream("src/main/resources/data/file.bin"));
		      NaiveBayes alg  = kryo.readObject(input, weka.classifiers.bayes.NaiveBayes.class);
		      input.close(); 
		    /*
		      double label2 = naiveBayes.classifyInstance(test);
				train.instance(0).setClassValue(label2);

				System.out.println("La salida guardada: " +train.instance(0).stringValue(4));
*/
			

		} catch (Exception e) {
			System.out.println("error alg " + e.getLocalizedMessage());
		}
	}

	public static void datax() {
		String fileName = "src/main/resources/data/datita.csv";
		try (CSVReader reader = new CSVReader(new FileReader(fileName))) {
			List<String[]> r = reader.readAll();
			r.forEach(x -> System.out.println((Arrays.toString(x))));
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (CsvException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		try {

			CsvMapper csvMapper = new CsvMapper();

			CSVLoader loader = new CSVLoader();
			loader.setSource(new File("src/main/resources/data/datita.csv"));
			System.out.println("la dates;: " + loader.getBufferSize());
			Instances data = loader.getDataSet();

			File fileArrf = new File("src/main/resources/data/datita.arff");

			ArffSaver saver = new ArffSaver();
			saver.setInstances(data);
			saver.setFile(fileArrf);
			saver.writeBatch();

			ConverterUtils.DataSource source = new ConverterUtils.DataSource(fileArrf.getAbsolutePath());
			Instances instances = source.getDataSet();
			// Header set index
			instances.setClassIndex(instances.numAttributes() - 1);

			System.out.println("error;: " + fileArrf.toString());

		} catch (Exception e) {
			System.out.println("error;: " + e.getMessage());
			// TODO: handle exception
		}

	}

}
