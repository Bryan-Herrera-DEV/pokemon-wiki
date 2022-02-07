import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonlistComponent } from "./pokemonlist/pokemonlist.component";
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
	declarations: [PokemonlistComponent, FiltroPipe, PokemonComponent],
	imports: [CommonModule],
	exports: [PokemonlistComponent],
})
export class PokemonModule {}
