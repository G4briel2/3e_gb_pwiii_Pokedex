import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private readonly URL = "https://pokeapi.co/api/v2/"

  constructor(
    private http: HttpClient
  ) { }

  buscarApiPokedex(): Observable<any>{
    return this.http.get<any>(`${URL}`)
  }
}
