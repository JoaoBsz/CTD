package Aula_4_chain_of_Responsibility.mesa;

public class HandlerPeso extends Handler{
    @Override
    public void avaliar(Artigo artigo) {
        final boolean avaliacao = artigo.getPeso() >= 1200 & artigo.getPeso() <= 1300;
        final boolean handlerSeguinteNaoNulo = this.hendlerseguinte!=null;

        System.out.println("_________________________________________");
        if ((avaliacao) & (handlerSeguinteNaoNulo)) {
                System.out.println("O artigo " + artigo.getNome() + " passou na avaliação de peso");
                this.hendlerseguinte.avaliar(artigo);
        }
        else if(avaliacao & !handlerSeguinteNaoNulo) {
                System.out.println("O artigo " + artigo.getNome() + " passou na avaliação de peso");
                System.out.println("Status geral do produto: Aceito");
        }
        else {
            System.out.println("Produto: "+artigo.getNome());
            System.out.println("Status geral do produto: Rejeitado");
        }
    }
}
