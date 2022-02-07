import { Pipe, PipeTransform } from "@angular/core";
import { Pokemon } from "../interfaces/pokemon.interfaces";

@Pipe({
	name: "filtro",
})
export class FiltroPipe implements PipeTransform {
	transform(
		pokemons: Pokemon[],
		page: number = 0,
		search: string = "",
		elementosEnPantalla: number = 5
	): Pokemon[] {
		if (search.length === 0)
			return pokemons.slice(page, page + elementosEnPantalla);
		const filter = pokemons.filter((poke) => poke.name.includes(search));

		return filter.slice(page, page + elementosEnPantalla);
	}
}
