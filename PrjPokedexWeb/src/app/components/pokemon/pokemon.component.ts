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
