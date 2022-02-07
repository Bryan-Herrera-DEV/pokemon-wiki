import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
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
		],
	},
	{
		path: "",
		redirectTo: "/home",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
