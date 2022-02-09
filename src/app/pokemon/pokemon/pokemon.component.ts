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
	public colors: any = {
		fire: "#FDDFDF",
		grass: "#DEFDE0",
		electric: "#FCF7DE",
		water: "#DEF3FD",
		ground: "#f4e7da",
		rock: "#d5d5d4",
		fairy: "#fceaff",
		poison: "#98d7a5",
		bug: "#f8d5a3",
		dragon: "#97b3e6",
		psychic: "#eaeda1",
		flying: "#c6e8f7",
		fighting: "#E6E0D4",
		normal: "#b7c0c4",
		ice: "#57bbe6",
		steel: "#A4A4A4",
		ghost: "#C5BADB",
		dark: "#6A5ACD",
	};

	public evolutes_from: string = "";
	public evolve_from_url: string = "";
	public description_pokemon: string = "";
	public gradiente: string = "";
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
	public hp_gradiente: string = "";
	ngOnInit(): void {
		this.pokemon
			.get_by_id(this.rutaActiva.snapshot.params.id)
			.subscribe((pokemon: Pokemon_b) => {
				console.log(pokemon.types);
				this.pokemonRecibido = pokemon;
				if (!this.pokemonRecibido.types[1]) {
					this.gradiente = `linear-gradient(135deg, ${
						this.colors[this.pokemonRecibido.types[0].type.name]
					} 80%, #3a3952 80%)`;
					this.hp_gradiente = `linear-gradient(to right, ${
						this.colors[this.pokemonRecibido.types[0].type.name]
					} 0%, #3a3952 100%)`;
				} else {
					this.gradiente = `linear-gradient(135deg, ${
						this.colors[this.pokemonRecibido.types[0].type.name]
					} 80%, ${this.colors[this.pokemonRecibido.types[1].type.name]} 80%)`;
					this.hp_gradiente = `linear-gradient(to right, ${
						this.colors[this.pokemonRecibido.types[0].type.name]
					} 0%, ${this.colors[this.pokemonRecibido.types[1].type.name]} 100%)`;
				}
				this.http
					.get(`${this.pokemonRecibido.species.url}`)
					.subscribe((resp: any) => {
						if (resp.evolves_from_species) {
							this.evolutes_from = `${resp.evolves_from_species.name}`;
							this.evolve_from_url = resp.evolves_from_species.url.split("/")[6];
						}
						if (resp.flavor_text_entries) {
							this.description_pokemon = resp.flavor_text_entries[1].flavor_text;
						}
					});
			});
	}
}
