angular.module('pokedexApp')
.factory('PokeApiFactory', PokeApiFactory);

function PokeApiFactory(){
    return{
        pkmList: [
            {name: 'bulbasaur', number: 1},
            {name: 'bulbasaur', number: 2},
            {name: 'bulbasaur', number: 3},
            {name: 'bulbasaur', number: 4}
        ]
    }
}