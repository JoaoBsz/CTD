package Aula1.mesa1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FiguraTest {
    Circulo circulo1 = new Circulo(2.3D);
    Quadrado quadrado = new Quadrado(20.5D);

    @Test
    void validarPerimetroQuadrado() {
        assertEquals("82,00", String.format("%.2f", quadrado.getPerimetro()));
        System.out.println(quadrado);
    }

    @Test
    void validarPerimetroCirculo() {assertEquals("14,44", String.format("%.2f", circulo1.getPerimetroCirc()));
        System.out.println(circulo1);
    }

}
