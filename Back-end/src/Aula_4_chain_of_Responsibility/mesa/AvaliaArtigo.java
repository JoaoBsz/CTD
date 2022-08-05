package Aula_4_chain_of_Responsibility.mesa;

public class AvaliaArtigo {
    public static void main(String[] args) {
        CheckArtigo checkArtigo = new CheckArtigo();

        Artigo artigo1 = new Artigo("café", 1201, 1230D,"saudável");
        Artigo artigo2 = new Artigo("arroz", 1500, 1300D,"saudável");
        Artigo artigo3 = new Artigo("eletrodomesticos", 1000, 500D,"quase saudável");
        Artigo artigo4 = new Artigo("roupas", 2000, 1200D,"danificado");
        Artigo artigo5 = new Artigo("brinquedos", 1500, 1299D,"saudável");
        Artigo artigo6 = new Artigo("carne", 500, 1300.5,"quase saudável");
        Artigo artigo7 = new Artigo("algodão", 1000, 1999D,"danificado");

        checkArtigo.checkQuality(artigo1);
        checkArtigo.checkQuality(artigo2);
        checkArtigo.checkQuality(artigo3);
        checkArtigo.checkQuality(artigo4);
        checkArtigo.checkQuality(artigo5);
        checkArtigo.checkQuality(artigo6);
        checkArtigo.checkQuality(artigo7);
    }
}
