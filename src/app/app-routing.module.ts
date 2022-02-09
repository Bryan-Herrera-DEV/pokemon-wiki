import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { NotFoundComponent } from "./middlewares/not-found/not-found.component";
import { PokemonComponent } from "./pokemon/pokemon/pokemon.component";
import { PokemonlistComponent } from "./pokemon/pokemonlist/pokemonlist.component";
const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},

	{
		path: "pokemon",
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

	{
		path: "",
		redirectTo: "/home",
		pathMatch: "full",
	},
	{
		path: "**",
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
