import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "pokemon",
    loadChildren: () => import("./components/pokemon/pokemon.module").then(m => m.PokemonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
