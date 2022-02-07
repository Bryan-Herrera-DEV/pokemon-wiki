import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../services/pokemon.service";
import { map } from "rxjs/operators";
import { Pokemon } from "../interfaces/pokemon.interfaces";
@Component({
	selector: "app-pokemonlist",
	templateUrl: "./pokemonlist.component.html",
	styleUrls: ["./pokemonlist.component.scss"],
})
export class PokemonlistComponent implements OnInit {
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
		flying: "#F5F5F5",
		fighting: "#E6E0D4",
		normal: "#F5F5F5",
		ice: "#57bbe6",
		steel: "#A4A4A4",
		ghost: "#C5BADB",
		dark: "#6A5ACD",
	};
	public pokemons: Pokemon[] = [];
	public page: number = 0;
	public search: string = "";
	constructor(private pokemonService: PokemonService) {}

	ngOnInit(): void {
		console.log(this.colors["normal"]);
		this.pokemonService.getAll().subscribe((pokemon) => {
			// this.pokemons = pokemons;
			pokemon.forEach((pokem) => {
				const types_: string[] = [];
				const pokemon_nuevo: Pokemon = {
					id: pokem.id,
					name: pokem.name,
					pic: pokem.pic,
					types: types_,
				};
				this.pokemonService.get_by_id(pokem.id).subscribe((poke) => {
					poke.types.forEach((type_: any) => {
						types_.push(type_.type.name);
					});
				});
				this.pokemons = [...this.pokemons, pokemon_nuevo];
			});
		});
	}
	actualPage: number = 0;
	nextPage() {
		this.page += 5;
		this.actualPage += 1;
	}
	prevPage() {
		if (this.page > 0) {
			this.page -= 5;
			this.actualPage -= 1;
		}
	}
	onSearc(pokemon: string) {
		this.page = 0;
		this.actualPage = 0;
		this.search = pokemon;
	}
}
