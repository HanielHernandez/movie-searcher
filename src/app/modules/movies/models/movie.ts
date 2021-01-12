export class Movie {

    adult: boolean;
    genreIds: [];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: 4652.913;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;

    constructor(json: any) {
        this.adult = json.adult;
        this.genreIds = json.genre_ids;
        this.id = json.id;
        this.originalLanguage = json.original_language;
        this.originalTitle = json.original_title;
        this.overview = json.overview;
        this.popularity = json.popularity;
        this.posterPath = json.poster_path;
        this.releaseDate = json.release_date;
        this.title = json.title;
        this.video = json.video;
        this.voteAverage = json.vote_average;
        this.voteCount = json.vote_count;
    }
}