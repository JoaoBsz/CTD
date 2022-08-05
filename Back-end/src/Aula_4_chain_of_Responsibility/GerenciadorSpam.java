package Aula_4_chain_of_Responsibility;

public class GerenciadorSpam extends Gerenciador{

    @Override
    public void verificar(Mail email){
        System.out.println("Marcado como spam");
    }
}
