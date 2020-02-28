angular.module('pokedexApp')
.factory('PokeApiFactory', PokeApiFactory);

PokeApiFactory.$inject = ['$http'] //injetando dependencia do $http

function PokeApiFactory($http){
    return{
        get url(){
            return '//dev.treinaweb.com.br/pokeapi/' //url em que buscara os dados dos pokemons
        },
        pkmList: [], //iniciando nossa lista de pokemons vazia
        listAll: function(){
            return $http.get(`${this.url}pokedex/1`) //service http fazendo requisicao
                .then(response => response.data.pokemon) //obtendo a resposta da requisicao, pegando o atributo pokemon
                .then(pkmList => {
                    return pkmList.map(pokemon => { //mapeando cada pokemon com seu nuemro
                        pokemon.number = this.getNumberFromURL(pokemon.resource_uri); 
                        return pokemon;
                    })
                    .filter(pokemon => pokemon.number < 1000)
                    .sort((a, b) => (a.number > b.number ? 1 : -1))
                })
                .then(pkmList =>{
                    this.pkmList = pkmList;
                    return pkmList; //retornando a lista de pokemons
                })
        },
        getNumberFromURL: function(url){
            return parseInt(url.replace(/.*\/(\d+)\/$/, '$1')); //formatando o numero do pokemon que veio da url
        }
    }
}