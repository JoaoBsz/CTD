package Aula_4_chain_of_Responsibility.mesa;


public class CheckArtigo {

    Handler inicial;

    public CheckArtigo(){
        this.inicial = new HandlerPeso();
        Handler handlerLote = new HandlerLote();
        Handler handlerEmbalagem = new HandlerEmbalagem();

        inicial.setSeguinte(handlerLote);
        handlerLote.setSeguinte(handlerEmbalagem);
    }

    public void checkQuality(Artigo artigo){
        inicial.avaliar(artigo);
    }
}
