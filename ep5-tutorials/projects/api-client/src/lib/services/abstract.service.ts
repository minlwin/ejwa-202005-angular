import { HttpClient } from '@angular/common/http'

export abstract class AbstractService {

    protected abstract get api(): string

    constructor(protected http: HttpClient) { }

    save(data: any) {
        return data.id ? this.http.put<any>(this.api, data) : this.http.post(this.api, data)
    }

    findAll() {
        return this.http.get<any[]>(this.api)
    }
}