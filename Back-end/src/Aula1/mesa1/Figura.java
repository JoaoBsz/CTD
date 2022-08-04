package Aula1.mesa1;

public abstract class Figura {
    Double comprimento;

    public Figura(Double comprimento) {
        this.comprimento = comprimento;
    }

    public Double getComprimento() {
        return comprimento;
    }

    public void setComprimento(Double comprimento) {
        this.comprimento = comprimento;
    }
}
