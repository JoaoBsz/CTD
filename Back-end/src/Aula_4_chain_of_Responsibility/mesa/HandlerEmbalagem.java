package Aula_4_chain_of_Responsibility.mesa;

public class HandlerEmbalagem extends Handler {

    @Override
    public void avaliar(Artigo artigo) {
        final boolean artigoSaudavel = artigo.getEmbalagem().equalsIgnoreCase("saudável");
        final boolean artigoQuaseSaudavel = artigo.getEmbalagem().equalsIgnoreCase("quase saudável");

        final boolean avaliacao = artigoSaudavel | artigoQuaseSaudavel;
        final boolean handlerSeguinteNaoNulo = this.hendlerseguinte!=null;

        if ((avaliacao) & (handlerSeguinteNaoNulo)) {
            System.out.println("O artigo " + artigo.getNome() + " passou na avaliação de embalagem");
            this.hendlerseguinte.avaliar(artigo);
        }
        else if(avaliacao & !handlerSeguinteNaoNulo) {
            System.out.println("O artigo " + artigo.getNome() + " passou na avaliação de embalagem");
            System.out.println("Status geral do produto: Aceito");
        }
        else {
            System.out.println("Produto: "+artigo.getNome());
            System.out.println("Status geral do produto: Rejeitado");
        }
        System.out.println("_________________________________________");
    }
}
