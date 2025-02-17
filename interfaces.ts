export interface APIData {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokeFromApi[]
}

export interface PokeFromApi {
    name: string;
    url: string;
}

export interface BasePoke {
    name: string;
    url: string;
    id: number;
}