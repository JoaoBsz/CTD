package Aula_4_chain_of_Responsibility.mesa;

public class Artigo {

    private String Nome;
    private int Lote;
    private double peso;
    private String Embalagem;

    public Artigo(String nome, int lote, double peso, String embalagem) {
        Nome = nome;
        Lote = lote;
        this.peso = peso;
        Embalagem = embalagem;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public int getLote() {
        return Lote;
    }

    public void setLote(int lote) {
        Lote = lote;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public String getEmbalagem() {
        return Embalagem;
    }

    public void setEmbalagem(String embalagem) {
        Embalagem = embalagem;
    }
}
