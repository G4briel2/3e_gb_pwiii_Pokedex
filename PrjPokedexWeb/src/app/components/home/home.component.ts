import { Component } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private pokedexService: PokedexService
  ){
    this.buscarRotas()
  }

  buscarRotas(){
    this.pokedexService.buscarApiPokedex().subscribe({
      next: (resposta) => {
        console.log(resposta)
      },
      error: (erro) => {
        console.log(erro)
      }
    })
  }
}
