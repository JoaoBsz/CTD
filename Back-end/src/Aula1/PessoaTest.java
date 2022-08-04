package Aula1;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class PessoaTest {
    Pessoa p1,p2,p3,p4,p5,p6,p7,p8,p9,p10;
    List<String> colecao = new ArrayList<String>();

    @BeforeEach
    void  doBefore(){

        p1 = new Pessoa("João", "Sousa");
        p1.setDataNascimento(LocalDate.of(2001,11,06));

        p2 = new Pessoa("Ana", "Silva");
        p2.setDataNascimento(LocalDate.of(2007,12,9));

        p3 = new Pessoa("Joe", "Musk");
        p3.setDataNascimento(LocalDate.of(2006,8,06));

        p4 = new Pessoa("Roert", "Salgado");
        p4.setDataNascimento(LocalDate.of(2012,5,9));

        p5 = new Pessoa("Ted", "Santos");
        p5.setDataNascimento(LocalDate.of(2010,4,16));

        p6 = new Pessoa("Maria", "Conceição");
        p6.setDataNascimento(LocalDate.of(1998,2,15));

        p7 = new Pessoa("Pedro", "Batista");
        p7.setDataNascimento(LocalDate.of(2010,1,10));

        p8 = new Pessoa("Jesus","Cristo");
        p8.setDataNascimento(LocalDate.of(2009,8,20));

        p9 = new Pessoa("Guilherme", "Gomes");
        p9.setDataNascimento(LocalDate.of(2011,12,20));

        p10 = new Pessoa("Renata", "Ingrata");
        p10.setDataNascimento(LocalDate.of(2003,10,20));

    }

    @Test
    void imprimiObjetos(){
        System.out.println(p1.toString());
        System.out.println(p2.toString());
        System.out.println(p3.toString());
        System.out.println(p4.toString());
        System.out.println(p5.toString());
        System.out.println(p6.toString());
        System.out.println(p7.toString());
        System.out.println(p8.toString());
        System.out.println(p9.toString());
        System.out.println(p10.toString());
    }

    @Test
    void adicionarColecao(){
        p1.addNomes(p1);
        p1.addNomes(p2);
        p1.addNomes(p3);
        p1.addNomes(p4);
        p1.addNomes(p5);
        p1.addNomes(p6);
        p1.addNomes(p7);
        p1.addNomes(p8);
        p1.addNomes(p9);
        p1.addNomes(p10);
    }
}
