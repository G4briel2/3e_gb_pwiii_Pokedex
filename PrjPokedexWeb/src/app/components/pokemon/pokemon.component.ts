import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemon: any = []
  url: any = [];
  spriteUrl: any = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  hp: any = "";
  vel: any = "";

  atk: any = "";
  def: any = "";
  sAtk: any = "";
  sDef: any = "";

  
  constructor(
    private location: Location,
    private pokedexService: PokedexService
    ) {}

  ngOnInit(): void{
    this.carregarDados()
  }

  carregarDados(){
    this.url = this.location.path().split("/").at(-1);
    this.pokedexService.buscarPokemon(this.url).subscribe({
      next: (data: any) => {
        this.pokemon = data
        this.hp = this.pokemon.stats[0].base_stat
        this.vel = this.pokemon.stats[5].base_stat

        this.atk = this.pokemon.stats[1].base_stat
        this.def = this.pokemon.stats[2].base_stat
        this.sAtk = this.pokemon.stats[3].base_stat
        this.sDef = this.pokemon.stats[4].base_stat
      },
      error: (erro: any) => {
        console.error(erro)
      }
    })
  }

  getTypeNames(types: any[] = []) {
    return types.map(type => type.type.name).join(', ');
  }
}
