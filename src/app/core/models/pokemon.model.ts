export interface Pokemon {

    id: string | undefined
    Uid: string | undefined
    name: string
    type: string
    level: number
    evolution_level: number
    image: string
    evolution_to: string // -> Reference (id of the pokemon to which it will evolve)
    abilities: [string]
}

export enum PokemonType {

    Water = 'Water',
    Dirt = 'Dirt',
    Fire = 'Fire',
    Electric = 'Electric'

}