import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { NotFoundComponent } from "./middlewares/not-found/not-found.component";
import { PokemonComponent } from "./pokemon/pokemon/pokemon.component";
import { PokemonlistComponent } from "./pokemon/pokemonlist/pokemonlist.component";
const routes: Routes = [
	{
		path: "home",
		loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
	},
	{
		path: "pokemon",
		loadChildren: () =>
			import("./pokemon/pokemon.module").then((m) => m.PokemonModule),
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
