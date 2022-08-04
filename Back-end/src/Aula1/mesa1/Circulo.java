package Aula1.mesa1;

public class Circulo extends Figura{
    Double pi = 3.14;
    Double perimetroCirc = 2 * pi * getComprimento();

    public Circulo(Double comprimento) {
        super(comprimento);
    }

    @Override
    public String toString() {
        return "Circulo{" +
                "perimetro=" + perimetroCirc +
                ", comprimento=" + comprimento +
                '}';
    }

    public Double getPerimetroCirc() {
        return perimetroCirc;
    }

    public void setPerimetroCirc(Double perimetroCirc) {
        this.perimetroCirc = perimetroCirc;
    }
}
