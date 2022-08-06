package Aula_5_Proxy;

import org.junit.jupiter.api.Test;

public class DownloadTest {

    @Test
    public void contaFree(){
        Usuario usuario = new Usuario("free", "joaobs4");
        Download download = new ServiçoDownloadProxy();

        download.baixarMusica(usuario);
    }

    @Test
    public void contaPremium(){
        System.out.println("______________________________________");
        Usuario usuario = new Usuario("Premium","AnaM2");
        Download download = new ServiçoDownloadProxy();

        download.baixarMusica(usuario);
    }

}
