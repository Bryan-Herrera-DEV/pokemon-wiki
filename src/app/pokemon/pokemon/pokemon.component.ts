import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Pokemon_b } from "../interfaces/pokemon.interfaces";
import { PokemonService } from "../services/pokemon.service";
@Component({
	selector: "app-pokemon",
	templateUrl: "./pokemon.component.html",
	styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
	constructor(
		private rutaActiva: ActivatedRoute,
		private pokemon: PokemonService,
		private http: HttpClient,
		private route: Router
	) {}
	public evolutes_from: string = "";
	public evolve_from_url: string = "";
	public pokemonRecibido: Pokemon_b = {
		abilities: [],
		base_experience: 0,
		forms: [],
		game_indices: [],
		height: 0,
		held_items: [],
		id: 0,
		is_default: false,
		location_area_encounters: "",
		moves: [],
		name: "",
		order: 0,
		past_types: [],
		species: {
			name: "",
			url: "",
		},
		sprites: {},
		stats: [],
		types: [],
		weight: 0,
	};
	redirect() {
		this.route.navigate(["/pokemon/list"]);
	}
	ngOnInit(): void {
		this.pokemon
			.get_by_id(this.rutaActiva.snapshot.params.id)
			.subscribe((pokemon: Pokemon_b) => {
				this.pokemonRecibido = pokemon;

				this.http
					.get(`${this.pokemonRecibido.species.url}`)
					.subscribe((resp: any) => {
						if (resp.evolves_from_species) {
							this.evolutes_from = `${resp.evolves_from_species.name}`;
							this.evolve_from_url = resp.evolves_from_species.url.split("/")[6];
						}
					});
			});
	}
}
