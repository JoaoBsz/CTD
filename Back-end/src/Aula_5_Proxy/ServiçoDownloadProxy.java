package Aula_5_Proxy;

public class ServiçoDownloadProxy implements Download {
    @Override
    public void baixarMusica(Usuario usuario) {
        if (usuario.getStatus().equalsIgnoreCase("Premium")){
            ServicoDownload servicoDownload = new ServicoDownload();
            servicoDownload.baixarMusica(usuario);
        }
        else {
            System.out.println("Olá "+usuario.geteMail()+"! Com a conta free não é possível baixar músicas");
            System.out.println("Venha para o premium e ouça músicas onde e como quiser");
        }
    }
}
