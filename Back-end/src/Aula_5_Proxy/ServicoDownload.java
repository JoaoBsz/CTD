package Aula_5_Proxy;

public class ServicoDownload implements Download {

    @Override
    public void baixarMusica(Usuario usuario) {
        System.out.println("acessando conta: "+ usuario.geteMail()+"...");
        System.out.println("Baixando música...");
    }
}
