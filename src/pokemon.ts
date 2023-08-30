export interface DPokemon {
  firstname: string;
  weight: number;
  height: number;
  hpCurrent: number;
  hpMax: number;
  level: number;
  gender: string;
  pokedexNumber: number;
}

export class Pokemon implements DPokemon {
  constructor(
    readonly firstname: string,
    readonly weight: number,
    readonly height: number,
    readonly hpCurrent: number,
    readonly hpMax: number,
    readonly level: number,
    readonly gender: string,
    readonly pokedexNumber: number,
    readonly url: string
  ) {}
}
