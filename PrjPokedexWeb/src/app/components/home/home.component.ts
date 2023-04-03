import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  pokemons: any[] = []
  tipos: any[] = []

  constructor(
    private pokedexService: PokedexService 
  ){}

  ngOnInit(): void{}

  buscarPokemonPorGeracao(idGeracao: any): void{
    this.pokedexService.buscarGeracao(idGeracao).subscribe(dados => {
      const pokemons = dados.pokemon_species

      const requisicoes = pokemons.map((pokemon: any) => {
        const idPokemon = pokemon.url.split("/").at(-2)
        return this.pokedexService.buscarPokemon(idPokemon)
      })
      combineLatest(requisicoes).subscribe({
        next: (data: any) => {
          this.pokemons = data
        },
        error: (erro) => {
          console.error(erro)
        }
      })
    })
  }

  buscarPokemonPorTipo(idTipo: any): void {
    this.pokedexService.buscarTipo(idTipo).subscribe(dados => {
      const pokemons = dados.pokemon

      const requisicoes = pokemons.map((pokemon: any) => {
        const idPokemon = pokemon.pokemon.url.split("/").at(-2)
        return this.pokedexService.buscarPokemon(idPokemon)
      })
      combineLatest(requisicoes).subscribe({
        next: (data: any) => {
          this.tipos = data
        },
        error: (erro: any) => {
          console.error(erro)
        }
      })
    })
  }
}
