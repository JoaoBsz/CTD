package Aula_5_Proxy;

public class Usuario {
    private String status;
    private String eMail;

    public Usuario(String status, String eMail) {
        this.status = status;
        this.eMail = eMail;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }
}
