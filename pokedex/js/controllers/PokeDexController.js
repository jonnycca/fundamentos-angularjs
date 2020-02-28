// ** Criando primeiro controller para a pokeDex **
angular.module('pokedexApp')
.controller('PokeDexController', PokeDexController);

PokeDexController.$inject = ['PokeApiFactory']

function PokeDexController(PokeApiFactory){
    var vm = this; //atribuindo o valor do this a variavel vm por boas práticas.
    //no javaScript, o this tem seu valor alterado dependendo do contexto
    
    //variavel que será usada para efetuarmos pesquisa
    vm.searchText = '';

    vm.pkmList = []; //lista de pokemons vai comecar vazia

    if(vm.pkmList.length){//verificando se a requisicao ja foi feita e ja obteve os dados dos pokemons
        vm.pkmList = PokeApiFactory.pkmList; //se ja foi feita, ? s? atribuir
    }else{
        PokeApiFactory.listAll() //se ainda nao foi feita, chama o listAll para fazer a requisicao e atribui a lista de pokemons
        .then(pkmList =>{
            vm.pkmList = pkmList; //obtendo a lista de pokemons que veio da pokeAPI
        })
    } 
}