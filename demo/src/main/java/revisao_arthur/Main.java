package revisao_arthur;

import revisao_arthur.entity.Cliente;
import revisao_arthur.entity.Pokemon;
import revisao_arthur.entity.Cidade;


public class Main {
    public static void main(String[] args) {
        //System.out.println("Hello world!");

        Cidade joinville = new Cidade();
        joinville.setNome("Joinville");
        joinville.setEstado("Santa Catarina");

        Pokemon charmander = new Pokemon("Charmander");

        Cliente zezinho = new Cliente("Zezinho");
        zezinho.setNome("zezinho da silva Sauro");
        zezinho.setCidade(joinville);

        zezinho.getListaPokemon().add(charmander);

        Cliente mariazinha = new Cliente("Mariazinha");
        mariazinha.setNome("Mariazinha");


        System.out.println(zezinho);
        System.out.println(mariazinha);

    }
}