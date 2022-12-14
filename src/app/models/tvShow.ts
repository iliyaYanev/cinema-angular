export interface TvShow {
    poster_path: string,
    popularity: number,
    id: number,
    backdrop_path: string,
    vote_average: number,
    overview: string,
    first_air_date: string,
    origin_country: string[],
    genre_ids: string[],
    original_language: string,
    vote_count: number,
    name: string,
    original_name: string
}

export interface TvShowDTO {
    page: number,
    results: TvShow[],
    total_results: number,
    total_pages: number
}
