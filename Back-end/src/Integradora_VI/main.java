package Integradora_VI;

import java.io.*;
import java.nio.CharBuffer;
import java.util.ArrayList;
import java.util.List;


public class main {
    public static void main(String[] args) {
        Funcionario funcionario1 = new Funcionario("mario", "Andrade","12345", 1500D);
        Funcionario funcionario2 = new Funcionario("João", "Amorin","3456345", 2500D);
        Funcionario funcionario3 = new Funcionario("Bruno", "Sousa","123345", 1600D);
        Funcionario funcionario4 = new Funcionario("Lucas", "Silva","123345", 1700D);

        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(funcionario1);
        funcionarios.add(funcionario2);
        funcionarios.add(funcionario3);
        funcionarios.add(funcionario4);

        Empresa empresa = new Empresa("Tech4", "16728381", funcionarios);


        try {
            FileOutputStream fo = new FileOutputStream("empresa.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fo);

            objectOutputStream.writeObject(empresa);

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        Empresa empresa2= new Empresa();

        try {
            FileInputStream fi= new FileInputStream("empresa.txt");
            ObjectInputStream ois = new ObjectInputStream(fi);

            empresa2 = (Empresa) ois.readObject();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        System.out.println(empresa2);

        //Desafio 2
        String data = funcionario1.toString()+"\n"+
                funcionario2.toString()+"\n"+
                funcionario3.toString()+"\n"+
                funcionario4.toString()+"\n";
        try {
            // Creates a Writer using FileWriter
            FileWriter output = new FileWriter("output.txt");

            // Writes string to the file
            output.write(data);
            System.out.println("Data is written to the file.");
            // Closes the writer
            output.close();
        }
        catch (Exception e) {
            e.getStackTrace();
        }
    }

}

