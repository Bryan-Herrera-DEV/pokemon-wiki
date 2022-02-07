import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
	FetchAllPokemon,
	Pokemon,
	Pokemon_b,
} from "../interfaces/pokemon.interfaces";

@Injectable({
	providedIn: "root",
})
export class PokemonService {
	private baseUrl = "https://pokeapi.co/api/v2";
	constructor(private http: HttpClient) {}

	private transformPokemon(resp: FetchAllPokemon): Pokemon[] {
		const pokemonlist: Pokemon[] = resp.results.map((poke) => {
			const urlArray = parseInt(poke.url.split("/")[6]);
			const id = urlArray;
			const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

			return {
				id,
				name: poke.name,
				pic,
				types: [],
			};
		});

		return pokemonlist;
	}
	get_by_id(id: number) {
		return this.http.get<Pokemon_b>(`${this.baseUrl}/pokemon/${id}`);
	}
	getAll(): Observable<Pokemon[]> {
		return this.http
			.get<FetchAllPokemon>(`${this.baseUrl}/pokemon?limit=1500`)
			.pipe(map(this.transformPokemon));
	}
}
