package Aula1.mesa1;

public class Quadrado extends Figura{
    Double perimetro = 4 * getComprimento();
    public Quadrado(Double comprimento) {
        super(comprimento);
    }

    @Override
    public String toString() {
        return "Quadrado{" +
                "perimetro=" + perimetro +
                ", comprimento=" + comprimento +
                '}';
    }

    public Double getPerimetro() {
        return perimetro;
    }

    public void setPerimetro(Double perimetro) {
        this.perimetro = perimetro;
    }
}
