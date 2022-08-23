package Integradora_VI;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Empresa implements Serializable {
    private String nome;
    private String cnpj;
    private List<Funcionario> funcionarios= new ArrayList();


    public Empresa(String nome, String cnpj, List<Funcionario> funcionarios) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.funcionarios = funcionarios;
    }
    public Empresa(){

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public List<Funcionario> getFuncionarios() {
        return funcionarios;
    }

    public void setFuncionarios(List<Funcionario> funcionarios) {
        this.funcionarios = funcionarios;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "nome='" + nome + '\'' +
                ", cnpj='" + cnpj + '\'' +
                ", funcionarios=" + funcionarios +
                '}';
    }
}
