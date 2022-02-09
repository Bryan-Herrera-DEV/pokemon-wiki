import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PokemonlistComponent } from "./pokemonlist/pokemonlist.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { NotFoundComponent } from "../middlewares/not-found/not-found.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "list",
				component: PokemonlistComponent,
			},
			{
				path: ":id",
				component: PokemonComponent,
			},
			{
				path: "**",
				component: NotFoundComponent,
			},
		],
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PokemonRoutingModule {}
