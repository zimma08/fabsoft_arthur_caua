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
        Pokemon charmeleon = new Pokemon("Charmeleon");


        Cliente zezinho = new Cliente("Zezinho");
        zezinho.setNome("zezinho da silva Sauro");
        zezinho.setCidade(joinville);

        zezinho.getListaPokemon().add(charmander);
        zezinho.getListaPokemon().add(charmander);
        //zezinho.getListaPokemon().add(123);
        //zezinho.getListaPokemon().add(2.2);
        //zezinho.getListaPokemon().add("nao sou um pokemon");
        //zezinho.getListaPokemon().add(true);

        for(int i=0;i<zezinho.getListaPokemon().size();i++){
            var umPokemon = zezinho.getListaPokemon().get(i);
            System.out.println(umPokemon);
        }
        for(var umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }
        // gere um codigo para listar pokemons ultilizando o modo stream
        zezinho.getListaPokemon().stream().forEach(System.out::println);
        Cliente mariazinha = new Cliente("Mariazinha");
        mariazinha.setNome("Mariazinha");


        System.out.println(zezinho);
        System.out.println(mariazinha);

    }
}