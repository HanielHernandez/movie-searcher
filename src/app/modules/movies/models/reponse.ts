export class ResponseResult<t>{
    page: number;
    results: t[];
    totalPages: number;
    totalResults: number;

    constructor(json: any) {
        this.page = json.page;
        this.results = json.results;
        this.totalPages = json.total_pages;
        this.totalResults = json.total_resuts;
    }
}