angular.module('pokedexApp')
.factory('PokeApiFactory', PokeApiFactory);

function PokeApiFactory(){
    return{
        pkmList: [
            {name: 'bulbasaur', number: '001'},
            {name: 'bulbasaur', number: '001'},
            {name: 'bulbasaur', number: '001'},
            {name: 'bulbasaur', number: '001'}
        ]
    }
}