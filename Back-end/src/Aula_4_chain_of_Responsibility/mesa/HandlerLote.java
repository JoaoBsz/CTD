package Aula_4_chain_of_Responsibility.mesa;

public class HandlerLote extends Handler{
    @Override
    public void avaliar(Artigo artigo) {
        final boolean avaliacao = artigo.getLote() >= 1000 & artigo.getLote() <= 2000;
        final boolean handlerSeguinteNaoNulo = this.hendlerseguinte!=null;


        if ((avaliacao) & (handlerSeguinteNaoNulo)) {
            System.out.println("O artigo " + artigo.getNome() + " passou na avaliação de Lote");
            this.hendlerseguinte.avaliar(artigo);
        }
        else if(avaliacao & !handlerSeguinteNaoNulo) {
            System.out.println("O artigo " + artigo.getNome() + " passou na avaliação de Lote");
            System.out.println("Status geral do produto: Aceito");
        }
        else {
            System.out.println("Produto: "+artigo.getNome());
            System.out.println("Status geral do produto: Rejeitado");
        }
    }
}
