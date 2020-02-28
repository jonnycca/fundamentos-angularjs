// ** Criando primeiro controller para a pokeDex **
angular.module('pokedexApp')
.controller('PokeDexController', PokeDexController);

PokeDexController.$inject = ['PokeApiFactory']

function PokeDexController(PokeApiFactory){
    var vm = this; //atribuindo o valor do this a variavel vm por boas práticas.
    //no javaScript, o this tem seu valor alterado dependendo do contexto
    
    //variavel que será usada para efetuarmos pesquisa
    vm.searchText = '';

    vm.pkmList = PokeApiFactory.pkmList;
}