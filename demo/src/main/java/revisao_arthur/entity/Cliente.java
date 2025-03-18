package revisao_arthur.entity;

import java.util.ArrayList;

public class Cliente {
    //variável - atributo
    private long id;
    private String nome;
    private String endereço;

    private ArrayList listaPokemon = new ArrayList();

    public ArrayList getListaPokemon(){
        return listaPokemon;
    }
    public void setListaPokemon(ArrayList listaPokemon){
        this.listaPokemon = listaPokemon;
    }

    private Cidade cidade;

    public Cidade getCidade(){
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getEndereço() {
        return endereço;
    }
    public void setEndereço(String endereço) {
        this.endereço = endereço;
    }
    //construtor - mesmo nome da classe e não te retorno
    //inicializar atributos
    //obrigar a passagem de valores 
    public Cliente(String nome) {
        this.nome = nome;
    }
    //polimorfismo - várias formas de existir a mesma coisa
    public Cliente() {
        
    }
    //método
    @Override
    public String toString(){
        return getNome();
    }

    //método
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //encapsulamento 

}