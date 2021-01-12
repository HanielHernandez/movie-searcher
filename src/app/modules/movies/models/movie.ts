export class Movie {

    adult: boolean;
    genreIds: MovieGenre[];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;

    productionCompanies: ProductionCompany[];
    revenue: number;
    runtime: number;

    spokenLanguages: Languages[];
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
        this.productionCompanies = json.production_companies ? json.production_companies.map(p => new ProductionCompany(p)) : [];
        this.spokenLanguages = json.spoken_languages ? json.spoken_languages.map(l => new Languages(l)) : [];
    }
}

export interface MovieGenre {
    id: number;
    name: string;
}
export class ProductionCompany {
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
    constructor(json: any) {
        this.id = json.id;
        this.logoPath = json.logo_path;
        this.name = json.name;
        this.originCountry = json.origin_country;
    }
}

export class Languages {
    englisName: string;
    iso6391: string;
    name: string;
    constructor(json: any) {
        this.name = json.name;
        this.iso6391 = json.iso_639_1;
        this.englisName = json.english_name;
    }
}
