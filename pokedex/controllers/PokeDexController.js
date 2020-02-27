// ** Criando primeiro controller para a pokeDex **
angular.module('pokedexApp')
.controller('PokeDexController', PokeDexController);

function PokeDexController(){
    var vm = this; //atribuindo o valor do this a variavel vm por boas práticas.
    //no javaScript, o this tem seu valor alterado dependendo do contexto
    
    //variavel que será usada para efetuarmos pesquisa
    vm.searchText = '';
    
    // lista de pokemons
    vm.pkmList = [
        {name: 'bulbasaur', number: '001'},
        {name: 'bulbasaur', number: '001'},
        {name: 'bulbasaur', number: '001'},
        {name: 'bulbasaur', number: '001'}
    ];
}