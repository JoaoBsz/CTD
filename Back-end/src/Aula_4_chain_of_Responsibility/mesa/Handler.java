package Aula_4_chain_of_Responsibility.mesa;

public abstract class Handler {
    protected Handler hendlerseguinte;

    public Handler getSeguinte(){
        return this.hendlerseguinte;
    }

    public void setSeguinte(Handler handler){
        this.hendlerseguinte = handler;
    }

    public abstract void avaliar(Artigo artigo);

}
